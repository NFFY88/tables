import React from 'react'

import classNames from 'classnames'

import style from './styles/button.module.scss'

interface IDeleteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DeleteButton = ({ className = '', ...props }: IDeleteButtonProps): React.ReactElement => {
  const classes = classNames(style.base, style.delete, className)

  return (
    <button {...props} type='button' className={classes}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='Vector'
          d='M3.57727 15.2432C3.42102 15.3995 3.33328 15.6114 3.33333 15.8324C3.33338 16.0535 3.42123 16.2654 3.57755 16.4216C3.73386 16.5779 3.94585 16.6656 4.16686 16.6655C4.38787 16.6655 4.59982 16.5777 4.75606 16.4213L9.90119 11.277C9.91409 11.264 9.92942 11.2538 9.94629 11.2468C9.96317 11.2398 9.98125 11.2362 9.99952 11.2362C10.0178 11.2362 10.0359 11.2398 10.0527 11.2468C10.0696 11.2538 10.0849 11.264 10.0978 11.277L15.243 16.4225C15.3203 16.4999 15.4122 16.5613 15.5133 16.6032C15.6144 16.6451 15.7227 16.6666 15.8322 16.6667C15.9416 16.6667 16.05 16.6452 16.1511 16.6033C16.2522 16.5615 16.3441 16.5001 16.4215 16.4227C16.4989 16.3454 16.5603 16.2535 16.6022 16.1524C16.6441 16.0513 16.6657 15.943 16.6657 15.8336C16.6657 15.7241 16.6442 15.6158 16.6024 15.5147C16.5605 15.4135 16.4991 15.3217 16.4218 15.2443L11.2772 10.0977C11.2643 10.0848 11.254 10.0695 11.247 10.0526C11.24 10.0357 11.2364 10.0176 11.2364 9.99936C11.2364 9.98109 11.24 9.963 11.247 9.94613C11.254 9.92926 11.2643 9.91394 11.2772 9.90104L16.4229 4.75612C16.5791 4.59966 16.6668 4.38754 16.6667 4.16643C16.6665 3.94532 16.5785 3.73333 16.4221 3.5771C16.2656 3.42086 16.0535 3.33317 15.8323 3.33333C15.6112 3.33348 15.3992 3.42147 15.243 3.57793L10.0978 8.72174C10.0849 8.73467 10.0696 8.74493 10.0527 8.75193C10.0359 8.75893 10.0178 8.76254 9.99952 8.76254C9.98125 8.76254 9.96317 8.75893 9.94629 8.75193C9.92942 8.74493 9.91409 8.73467 9.90119 8.72174L4.75606 3.57793C4.6787 3.50053 4.58684 3.43913 4.48575 3.39723C4.38465 3.35533 4.2763 3.33375 4.16686 3.33372C3.94585 3.33367 3.73386 3.42141 3.57755 3.57765C3.42123 3.73389 3.33338 3.94582 3.33333 4.16683C3.33328 4.38783 3.42102 4.59981 3.57727 4.75612L8.72185 9.90104C8.73478 9.91394 8.74504 9.92926 8.75204 9.94613C8.75904 9.963 8.76265 9.98109 8.76265 9.99936C8.76265 10.0176 8.75904 10.0357 8.75204 10.0526C8.74504 10.0695 8.73478 10.0848 8.72185 10.0977L3.57727 15.2432Z'
          fill='currentColor'
        />
      </svg>
    </button>
  )
}

export default DeleteButton
