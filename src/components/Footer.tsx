import { FunctionComponent } from "react";
import "../style/footer.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className='container footer'>
      <p>Создано в рамках изучения TypeScript. Автор: Антон Кузьмин</p>
      <p className='footer-small'>Пожалуйста, возьмите меня на работу (´• ω •`)</p>
    </footer>
  );
};

export default Footer;
