import { useLoaderData, useNavigate } from "react-router-dom";
import type { components } from "../apischema";
import Graph from "graphology";
import {
  SigmaContainer,
  useLoadGraph,
  useRegisterEvents,
  useSigma,
} from "@react-sigma/core";
import { useEffect, useState } from "react";
import "@react-sigma/core/lib/style.css";

type Network = components["schemas"]["Network"];

export function NodeHoverCursor() {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();

  useEffect(() => {
    registerEvents({
      enterNode: () => {
        sigma.getContainer().style.cursor = "pointer";
      },
      leaveNode: () => {
        sigma.getContainer().style.cursor = "default";
      },
    });
  }, [sigma, registerEvents]);

  return null;
}

function GraphEvents() {
  const registerEvents = useRegisterEvents();
  const navigate = useNavigate();

  useEffect(() => {
    registerEvents({
      clickNode: (event) => {
        const nodeId = event.node;
        navigate(`/mechanic/${nodeId}`);
      },
    });
  }, [registerEvents, navigate]);

  return null;
}

function LoadGraph({ data }: { data: Network }) {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();

    data.nodes.forEach((n) => {
      graph.addNode(String(n.id), {
        label: n.label,
        size: n.size ?? 5,
        x: n.x,
        y: n.y,
        cluster: n.cluster ?? 0,
      });
    });

    data.edges.forEach((e) => {
      graph.addEdge(String(e.source), String(e.target), {
        size: e.size,
        label: e.label,
      });
    });

    loadGraph(graph);
  }, [data, loadGraph]);

  return null;
}

/**
 * Highlights hovered node and neighbors while greying out unrelated nodes/edges
 */
function HoverNeighborhood() {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const graph = sigma.getGraph();

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [neighbors, setNeighbors] = useState<Set<string> | null>(null);

  useEffect(() => {
    registerEvents({
      enterNode: ({ node }) => {
        setHoveredNode(node);
        setNeighbors(new Set(graph.neighbors(node)));
      },
      leaveNode: () => {
        setHoveredNode(null);
        setNeighbors(null);
      },
    });
  }, [graph, registerEvents]);

  useEffect(() => {
    sigma.setSetting("nodeReducer", (node, data) => {
      const baseColor =
        data.cluster === -1
          ? "#999999"
          : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"][data.cluster % 4];

      if (!hoveredNode) return { ...data, color: baseColor };

      if (node === hoveredNode || neighbors?.has(node)) {
        return { ...data, color: baseColor }; // keep cluster color
      }

      return { ...data, color: "#eee" }; // grey out unrelated nodes
    });

    sigma.setSetting("edgeReducer", (edge, data) => {
      if (!hoveredNode) return data;

      const [source, target] = graph.extremities(edge);
      if (
        source === hoveredNode ||
        target === hoveredNode ||
        neighbors?.has(source) ||
        neighbors?.has(target)
      ) {
        return data; // keep edge visible
      }

      return { ...data, hidden: true }; // hide unrelated edges
    });

    sigma.refresh({ skipIndexation: true });
  }, [hoveredNode, neighbors, graph, sigma]);

  return null;
}

export default function MechanicGraph() {
  const mechanic_graph_data = useLoaderData() as Network;

  return (
    <div className="h-screen">
      <SigmaContainer
        settings={{
          renderLabels: false,
          renderEdgeLabels: false,
        }}
      >
        <LoadGraph data={mechanic_graph_data} />
        <GraphEvents />
        <NodeHoverCursor />
        <HoverNeighborhood />
      </SigmaContainer>
    </div>
  );
}
