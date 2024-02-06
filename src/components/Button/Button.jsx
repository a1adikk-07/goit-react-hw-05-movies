import style from './button.module.css';

const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} type={type} className={style.btn}>
      {children}
    </button>
  );
};
export default Button;
