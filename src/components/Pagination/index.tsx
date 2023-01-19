import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { createPageRange } from './utils';

type PaginationProps = {
  className?: string;
  currentPage: number;
  numPages: number;
  feedRootPath: string;
  feedBasePath: string;
  pageRange?: number;
};

export default function Pagination({
  currentPage,
  numPages,
  feedRootPath,
  feedBasePath,
  className,
  pageRange = 7,
}: PaginationProps) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? feedRootPath : `${feedBasePath}/${currentPage - 1}`;
  const nextPage = `${feedBasePath}/${currentPage + 1}`;

  let caretLeft = (
    <ChevronLeftIcon
      className={classNames('h-8 w-8', { 'text-neutral-500': isFirst })}
    />
  );
  if (!isFirst) {
    caretLeft = (
      <Link
        to={prevPage}
        rel="prev"
        className="block text-neutral-900 hover:opacity-80"
      >
        {caretLeft}
      </Link>
    );
  }

  let caretRight = (
    <ChevronRightIcon
      className={classNames('h-8 w-8', { 'text-neutral-900': isLast })}
    />
  );
  if (!isLast) {
    caretRight = (
      <Link
        to={nextPage}
        rel="next"
        className="block text-neutral-900 hover:opacity-80"
      >
        {caretRight}
      </Link>
    );
  }

  return (
    <ul className={classNames('flex justify-center items-center', className)}>
      <li>{caretLeft}</li>
      {createPageRange(currentPage, numPages, pageRange).map((page, index) => {
        const active = currentPage === index + 1;
        const pageLink = (
          <span
            className={`text-sm font-semibold text-neutral-900 ${
              active && '!text-neutral-200'
            }`}
          >
            {page}
          </span>
        );

        return (
          <li key={`i-${index}`} className="mx-2.5">
            {typeof page === 'number' ? (
              <Link
                to={page === 1 ? feedRootPath : `${feedBasePath}/${page}`}
                className={classNames(
                  'flex items-center justify-center w-9 h-9',
                  'rounded-full border border-transparent hover:border-primary-main',
                  {
                    'border-primary-main bg-primary-main': page == currentPage,
                  },
                )}
              >
                {pageLink}
              </Link>
            ) : (
              pageLink
            )}
          </li>
        );
      })}
      <li>{caretRight}</li>
    </ul>
  );
}
