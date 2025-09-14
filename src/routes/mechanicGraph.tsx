import { useLoaderData, useNavigate } from "react-router-dom";
import type { components } from "../apischema";
import Graph from "graphology";
import {
  SigmaContainer,
  useLoadGraph,
  useRegisterEvents,
  useSigma,
} from "@react-sigma/core";
import { useEffect } from "react";
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

export default function MechanicGraph() {
  const mechanic_graph_data = useLoaderData() as Network;

  return (
    <div className="h-screen">
      <div className="flex-1 h-full w-full">
        <SigmaContainer
          settings={{
            nodeReducer: (node, data) => {
              console.log(node);
              return {
                ...data,
                color:
                  data.cluster === -1
                    ? "#999999" // isolated designers = gray
                    : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"][
                        data.cluster % 4
                      ],
              };
            },
            renderEdgeLabels: true,
            edgeLabelSize: 20,
          }}
        >
          <LoadGraph data={mechanic_graph_data} />
          <GraphEvents />
          <NodeHoverCursor />
        </SigmaContainer>
      </div>
    </div>
  );
}
