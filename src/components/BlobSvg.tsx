import { ComponentPropsWithRef } from 'react'

type BlobSvgProps = ComponentPropsWithRef<'svg'>

export function BlobSvg(props: BlobSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="718"
      height="700"
      viewBox="0 0 617 601"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M283.616 3.71155C348.004 7.32129 419.708 12.757 465.036 58.6293C509.005 103.126 487.138 179.21 513.218 236.069C539.366 293.077 616.346 326.065 616.471 388.783C616.596 451.077 563.773 503.176 513.827 540.405C468.894 573.896 410.053 573.738 354.912 583.739C305.834 592.642 256.985 608.61 208.797 595.734C160.001 582.694 121.35 548.262 86.2464 511.947C49.4788 473.91 9.92369 433.718 1.67764 381.462C-6.60612 328.967 28.8085 282.031 41.835 230.508C58.3948 165.009 39.3592 83.748 88.6335 37.5274C137.739 -8.5346 216.393 -0.0570573 283.616 3.71155Z"
        className="fill-primary/10 dark:fill-primary-dark/10"
      />
    </svg>
  )
}
