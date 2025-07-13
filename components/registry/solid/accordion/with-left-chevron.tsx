import {item.title}
            </span>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div class="pt-3 pl-7">
              {item.title}
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
