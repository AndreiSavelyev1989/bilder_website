import { memo } from "react";
import { Container, Paragraph, Title } from "./PersonalDataStyles";

export const PersonalData = memo(() => {
  return (
    <Container>
      <Title>Пользовательское соглашение</Title>
      <Paragraph>
        Настоящим Я, действуя своей волей и в своем интересе, при размещении
        (вводе) своих персональных данных на Интернет сайте ____ общества с
        ограниченной ответственностью _________ (ИНН_________, ОГРН__________,
        далее - Оператор) подтверждаю свое согласие на обработку указанных мной
        персональных данных Оператором в целях предложения мне услуг, новых
        услуг, предлагаемых Оператором, в целях проведения опросов,
        анкетирования, рекламных и маркетинговых исследований в отношении услуг,
        предоставляемых Оператором, в том числе путем осуществления прямых
        контактов со мною посредством средств связи, указанных мной на настоящем
        сайте. Настоящее право (согласие) предоставляется на осуществление любых
        действий в отношении моих персональных данных, которые необходимы и
        желаемы для достижения вышеуказанных целей, включая, без ограничения,
        сбор, систематизацию, накопление, хранение, уточнение (обновление,
        изменение), использование, передачу, обезличивание, блокирование и
        уничтожение персональных данных, под которыми понимаются все данные,
        указанные мной на настоящем сайте.
      </Paragraph>
      <Paragraph>
        Настоящим подтверждаю, что уведомлен о том, что обработка персональных
        данных осуществляется Оператором любым способом, в том числе как с
        использованием средств автоматизации (включая программное обеспечение),
        так и без использования средств автоматизации (с использованием
        различных материальных носителей, включая бумажные носители).
      </Paragraph>
    </Container>
  );
});
