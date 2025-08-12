"use client";

import { TreeView, createTreeCollection } from "@ark-ui/react/tree-view";
import {
  ChevronRight,
  File,
  FolderClosed,
  FolderOpen,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useTreeViewNodeContext } from "@ark-ui/react/tree-view";

interface Node {
  id: string;
  name: string;
  children?: Node[];
  childrenCount?: number;
}

// Mock API response
const response: Record<string, Node[]> = {
  node_modules: [
    { id: "zag-js", name: "zag-js" },
    { id: "pandacss", name: "panda" },
    { id: "@types", name: "@types", childrenCount: 2 },
  ],
  "node_modules/@types": [
    { id: "react", name: "react" },
    { id: "react-dom", name: "react-dom" },
  ],
  src: [
    { id: "app.tsx", name: "app.tsx" },
    { id: "index.ts", name: "index.ts" },
  ],
};

// Function to load children of a node
function loadChildren(
  details: TreeView.LoadChildrenDetails<Node>
): Promise<Node[]> {
  const value = details.valuePath.join("/");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response[value] ?? []);
    }, 1200);
  });
}

function TreeNodeIndicator() {
  const nodeState = useTreeViewNodeContext();
  return nodeState.loading ? (
    <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
  ) : (
    <>
      <FolderClosed className="h-4 w-4 text-blue-500 group-data-[state=open]:hidden" />
      <FolderOpen className="hidden h-4 w-4 text-blue-600 group-data-[state=open]:block" />
    </>
  );
}

const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props;
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children || node.childrenCount ? (
        <TreeView.Branch>
          <TreeView.BranchControl className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[state=open]:text-slate-900 dark:data-[state=open]:text-slate-100">
            <TreeView.BranchIndicator className="flex h-4 w-4 shrink-0 items-center justify-center">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:text-slate-600" />
            </TreeView.BranchIndicator>
            <TreeView.BranchText className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 group-data-[state=open]:text-slate-900 dark:group-data-[state=open]:text-slate-100">
              <TreeNodeIndicator />
              <span className="font-medium">{node.name}</span>
            </TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent className="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700/60">
            <TreeView.BranchIndentGuide />
            {node.children?.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/30 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-blue-200 dark:data-[selected]:ring-blue-800/30">
          <div className="flex h-4 w-4 shrink-0 items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-data-[selected]:bg-blue-500" />
          </div>
          <TreeView.ItemText className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 group-data-[selected]:text-blue-700 dark:group-data-[selected]:text-blue-300">
            <File className="h-4 w-4 text-slate-400 group-data-[selected]:text-blue-500" />
            <span>{node.name}</span>
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  );
};

const initialCollection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      { id: "node_modules", name: "node_modules", childrenCount: 3 },
      { id: "src", name: "src", childrenCount: 2 },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

export default function TreeViewAsyncLoading() {
  const [collection, setCollection] = useState(initialCollection);

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <TreeView.Root
        collection={collection}
        loadChildren={loadChildren}
        onLoadChildrenComplete={(e) => setCollection(e.collection)}
        className="w-full"
      >
        <TreeView.Label className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
          Project Files
        </TreeView.Label>
        <TreeView.Tree className="space-y-1 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
