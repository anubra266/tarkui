<script lang="ts">
  import { TreeView, createTreeCollection } from "@ark-ui/svelte/tree-view";
  import {
    ChevronRight,
    File,
    FolderClosed,
    FolderOpen,
    Loader2,
  } from "lucide-svelte";
  import { writable } from "svelte/store";
  import { useTreeViewNodeContext } from "@ark-ui/svelte/tree-view";

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
      { id: "svelte", name: "svelte" },
      { id: "vite", name: "vite" },
    ],
    src: [
      { id: "App.svelte", name: "App.svelte" },
      { id: "main.ts", name: "main.ts" },
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

  const initialCollection = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        { id: "node_modules", name: "node_modules", childrenCount: 3 },
        { id: "src", name: "src", childrenCount: 2 },
        { id: "vite.config", name: "vite.config.ts" },
        { id: "package.json", name: "package.json" },
        { id: "svelte.config.js", name: "svelte.config.js" },
        { id: "readme.md", name: "README.md" },
      ],
    },
  });

  let collection = writable(initialCollection);
</script>

<div class="w-full max-w-sm mx-auto">
  <TreeView.Root
    collection={$collection}
    {loadChildren}
    onLoadChildrenComplete={(e) => collection.set(e.collection)}
    class="w-full"
  >
    <TreeView.Label
      class="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100"
    >
      Project Files
    </TreeView.Label>
    <TreeView.Tree
      class="space-y-1 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
    >
      {#each $collection.rootNode.children || [] as node, index}
        <TreeView.NodeProvider {node} indexPath={[index]}>
          {#if node.children || node.childrenCount}
            <TreeView.Branch>
              <TreeView.BranchControl
                class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[state=open]:text-slate-900 dark:data-[state=open]:text-slate-100"
              >
                <TreeView.BranchIndicator
                  class="flex h-4 w-4 shrink-0 items-center justify-center"
                >
                  <ChevronRight
                    class="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:text-slate-600"
                  />
                </TreeView.BranchIndicator>
                <TreeView.BranchText
                  class="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 group-data-[state=open]:text-slate-900 dark:group-data-[state=open]:text-slate-100"
                >
                  {#if useTreeViewNodeContext().loading}
                    <Loader2 class="h-4 w-4 animate-spin text-blue-500" />
                  {:else}
                    <FolderClosed
                      class="h-4 w-4 text-blue-500 group-data-[state=open]:hidden"
                    />
                    <FolderOpen
                      class="hidden h-4 w-4 text-blue-600 group-data-[state=open]:block"
                    />
                  {/if}
                  <span class="font-medium">{node.name}</span>
                </TreeView.BranchText>
              </TreeView.BranchControl>
              <TreeView.BranchContent
                class="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700/60"
              >
                <TreeView.BranchIndentGuide />
                {#each node.children || [] as child, childIndex}
                  <TreeView.NodeProvider
                    node={child}
                    indexPath={[index, childIndex]}
                  >
                    {#if child.children || child.childrenCount}
                      <TreeView.Branch>
                        <TreeView.BranchControl
                          class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[state=open]:text-slate-900 dark:data-[state=open]:text-slate-100"
                        >
                          <TreeView.BranchIndicator
                            class="flex h-4 w-4 shrink-0 items-center justify-center"
                          >
                            <ChevronRight
                              class="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:text-slate-600"
                            />
                          </TreeView.BranchIndicator>
                          <TreeView.BranchText
                            class="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 group-data-[state=open]:text-slate-900 dark:group-data-[state=open]:text-slate-100"
                          >
                            {#if useTreeViewNodeContext().loading}
                              <Loader2
                                class="h-4 w-4 animate-spin text-blue-500"
                              />
                            {:else}
                              <FolderClosed
                                class="h-4 w-4 text-blue-500 group-data-[state=open]:hidden"
                              />
                              <FolderOpen
                                class="hidden h-4 w-4 text-blue-600 group-data-[state=open]:block"
                              />
                            {/if}
                            <span class="font-medium">{child.name}</span>
                          </TreeView.BranchText>
                        </TreeView.BranchControl>
                        <TreeView.BranchContent
                          class="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-700/60"
                        >
                          <TreeView.BranchIndentGuide />
                          {#each child.children || [] as grandChild, grandChildIndex}
                            <TreeView.NodeProvider
                              node={grandChild}
                              indexPath={[index, childIndex, grandChildIndex]}
                            >
                              <TreeView.Item
                                class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/30 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-blue-200 dark:data-[selected]:ring-blue-800/30"
                              >
                                <div
                                  class="flex h-4 w-4 shrink-0 items-center justify-center"
                                >
                                  <div
                                    class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-data-[selected]:bg-blue-500"
                                  />
                                </div>
                                <TreeView.ItemText
                                  class="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 group-data-[selected]:text-blue-700 dark:group-data-[selected]:text-blue-300"
                                >
                                  <File
                                    class="h-4 w-4 text-slate-400 group-data-[selected]:text-blue-500"
                                  />
                                  <span>{grandChild.name}</span>
                                </TreeView.ItemText>
                              </TreeView.Item>
                            </TreeView.NodeProvider>
                          {/each}
                        </TreeView.BranchContent>
                      </TreeView.Branch>
                    {:else}
                      <TreeView.Item
                        class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/30 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-blue-200 dark:data-[selected]:ring-blue-800/30"
                      >
                        <div
                          class="flex h-4 w-4 shrink-0 items-center justify-center"
                        >
                          <div
                            class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-data-[selected]:bg-blue-500"
                          />
                        </div>
                        <TreeView.ItemText
                          class="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 group-data-[selected]:text-blue-700 dark:group-data-[selected]:text-blue-300"
                        >
                          <File
                            class="h-4 w-4 text-slate-400 group-data-[selected]:text-blue-500"
                          />
                          <span>{child.name}</span>
                        </TreeView.ItemText>
                      </TreeView.Item>
                    {/if}
                  </TreeView.NodeProvider>
                {/each}
              </TreeView.BranchContent>
            </TreeView.Branch>
          {:else}
            <TreeView.Item
              class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/30 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-blue-200 dark:data-[selected]:ring-blue-800/30"
            >
              <div class="flex h-4 w-4 shrink-0 items-center justify-center">
                <div
                  class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-data-[selected]:bg-blue-500"
                />
              </div>
              <TreeView.ItemText
                class="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 group-data-[selected]:text-blue-700 dark:group-data-[selected]:text-blue-300"
              >
                <File
                  class="h-4 w-4 text-slate-400 group-data-[selected]:text-blue-500"
                />
                <span>{node.name}</span>
              </TreeView.ItemText>
            </TreeView.Item>
          {/if}
        </TreeView.NodeProvider>
      {/each}
    </TreeView.Tree>
  </TreeView.Root>
</div>
