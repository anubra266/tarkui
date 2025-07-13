import {item.title}
            </span>
            <Accordion.ItemIndicator class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div class="pt-3">
              {item.title}
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
