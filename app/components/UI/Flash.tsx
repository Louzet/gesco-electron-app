import React, { FC } from 'react';

interface FlashProps {
  type: 'info' | 'success' | 'warning' | 'danger' | 'error';
  message: string;
}

const Flash: FC<FlashProps> = ({ type, message }: FlashProps) => {
  let typeClassName = '';

  if (type === 'info') {
    typeClassName = 'is-info';
  }
  if (type === 'success') {
    typeClassName = 'is-success';
  }
  if (type === 'warning') {
    typeClassName = 'is-warning';
  }
  if (type === 'danger') {
    typeClassName = 'is-danger';
  }
  if (type === 'error') {
    typeClassName = 'is-error';
  }

  return (
    <article className={`message ${typeClassName}`}>
      <div className="message-body">{message}</div>
    </article>
  );
};

export default Flash;
