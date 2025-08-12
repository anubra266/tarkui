<script setup lang="ts">
import { TreeView, createTreeCollection } from "@ark-ui/vue/tree-view";
import { ChevronRight, File, FolderClosed, FolderOpen } from "lucide-vue-next";

interface Node {
  id: string;
  name: string;
  children?: Node[] | undefined;
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/zag-js", name: "zag-js" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/vue", name: "vue" },
              { id: "node_modules/@types/vite", name: "vite" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/App.vue", name: "App.vue" },
          { id: "src/main.ts", name: "main.ts" },
        ],
      },
      { id: "vite.config", name: "vite.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "vue.config.js", name: "vue.config.js" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

const TreeNode = ({ node, indexPath }: { node: Node; indexPath: number[] }) => (
  <TreeView.NodeProvider :node="node" :indexPath="indexPath">
    <TreeView.Branch v-if="node.children">
      <TreeView.BranchControl class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[state=open]:text-slate-900 dark:data-[state=open]:text-slate-100">
        <TreeView.BranchIndicator class="flex h-4 w-4 shrink-0 items-center justify-center">
          <ChevronRight class="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:text-slate-600" />
        </TreeView.BranchIndicator>
        <TreeView.BranchText class="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 group-data-[state=open]:text-slate-900 dark:group-data-[state=open]:text-slate-100">
          <FolderClosed class="h-4 w-4 text-blue-500 group-data-[state=open]:hidden" />
          <FolderOpen class="hidden h-4 w-4 text-blue-600 group-data-[state=open]:block" />
          <span class="font-medium">{{ node.name }}</span>
        </TreeView.BranchText>
      </TreeView.BranchControl>
      <TreeView.BranchContent class="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700/60">
        <TreeView.BranchIndentGuide />
        <TreeNode
          v-for="(child, index) in node.children"
          :key="child.id"
          :node="child"
          :indexPath="[...indexPath, index]"
        />
      </TreeView.BranchContent>
    </TreeView.Branch>
    <TreeView.Item
      v-else
      class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/30 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-blue-200 dark:data-[selected]:ring-blue-800/30"
    >
      <div class="flex h-4 w-4 shrink-0 items-center justify-center">
        <div class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-data-[selected]:bg-blue-500" />
      </div>
      <TreeView.ItemText class="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 group-data-[selected]:text-blue-700 dark:group-data-[selected]:text-blue-300">
        <File class="h-4 w-4 text-slate-400 group-data-[selected]:text-blue-500" />
        <span>{{ node.name }}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  </TreeView.NodeProvider>
);
</script>

<template>
  <div class="w-full max-w-sm mx-auto">
    <TreeView.Root :collection="collection" class="w-full">
      <TreeView.Label
        class="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100"
      >
        Project Files
      </TreeView.Label>
      <TreeView.Tree
        class="space-y-1 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
      >
        <TreeNode
          v-for="(node, index) in collection.rootNode.children"
          :key="node.id"
          :node="node"
          :indexPath="[index]"
        />
      </TreeView.Tree>
    </TreeView.Root>
  </div>
</template>
