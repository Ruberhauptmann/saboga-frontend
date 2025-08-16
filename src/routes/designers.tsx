import { useLoaderData } from "react-router-dom";
import type { components } from "../apischema";
import Graph from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import { useEffect } from "react";
import "@react-sigma/core/lib/style.css";
import {random} from 'graphology-layout';


type DesignerGraphData = components["schemas"]["DesignerNetwork"];

const sigmaStyle = { height: "500px", width: "500px" };

function LoadGraph({ data }: { data: DesignerGraphData }) {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    data.nodes.forEach((n) => {
      graph.addNode(String(n.id), {
        label: n.label,
        size: n.size ?? 5,
        x: n.x,
        y: n.y,
        color: "#ff6600",
      });
    });
    data.edges.forEach((e) => {
      graph.addEdge(String(e.source), String(e.target), { size: e.size });
    });
    console.log(graph)

    random.assign(graph);
    forceAtlas2.assign(graph, { iterations: 100, settings: { gravity: 10 } });

    loadGraph(graph);
  }, [data, loadGraph]);

  return null;
}

export default function Designer() {
  const designer_graph_data= useLoaderData() as DesignerGraphData;

  return (
    <div className="h-screen">
    <div className="flex-1 h-full w-full">
      <SigmaContainer graph={Graph}>
        <LoadGraph data={designer_graph_data} />
      </SigmaContainer>
    </div>
    </div>
  );

}

