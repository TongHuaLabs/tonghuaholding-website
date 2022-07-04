import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

export type ListProps = {
  title: string;
  value: number | string;
};

type ListBoxProps = {
  list: ListProps[];
  selected: ListProps;
  onSelected: (value: ListProps['value']) => void;
  className?: string;
};

const ListBox: React.FC<ListBoxProps> = ({
  list,
  selected,
  onSelected,
  className,
}) => {
  return (
    <div className={classNames(`relative`, className)}>
      <Listbox value={selected.value} onChange={(value) => onSelected(value)}>
        <Listbox.Button
          className={`w-full relative rounded-lg py-2 pl-3 pr-10 text-left shadow-md`}
        >
          <span className="block truncate">{selected.title}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="list absolute w-full py-1 shadow-lg bg-white">
            {list.map(({ title, value }, key) => (
              <Listbox.Option
                key={key}
                className={({ active }) =>
                  `relative select-none cursor-pointer py-2 pl-10 ${
                    active
                      ? 'bg-primary-main text-neutral-50'
                      : 'text-neutral-900'
                  }`
                }
                value={value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {title}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          selected ? 'text-neutral-50' : 'text-neutral-900'
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default ListBox;
