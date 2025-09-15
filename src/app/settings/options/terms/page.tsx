export default function SocialPage() {
  return (
    <section className="p-4 flex flex-col gap-10">
      <div className="m-auto w-9/10 bg-[#EDEDF4] rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4">Política de Privacidade – Magdá</h2>
        <p className="text-sm mb-2">Última atualização: 19/09/2025</p>

        <h3 className="font-semibold mt-4">1. Coleta de Dados Pessoais</h3>
        <p>1.1. Coletamos informações fornecidas diretamente por você, como:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Nome completo</li>
          <li>E-mail</li>
          <li>Telefone</li>
          <li>Outros dados inseridos voluntariamente em formulários</li>
        </ul>
        <p>
          1.2. Os dados são utilizados para:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Melhorar sua experiência no site</li>
          <li>Realizar comunicações quando necessário</li>
          <li>Enviar notificações ou informações importantes</li>
          <li>Cumprir exigências legais</li>
        </ul>
        <p>
          1.3. O Magdá não vende, aluga ou compartilha seus dados com terceiros,
          exceto quando exigido por lei ou ordem judicial.
        </p>

        <h3 className="font-semibold mt-4">2. Compartilhamento de Dados</h3>
        <p>2.1. Podemos compartilhar seus dados com:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provedores de serviços que auxiliam nas operações do site (ex: hospedagem, segurança, ferramentas de marketing)</li>
          <li>Autoridades governamentais ou legais, quando necessário</li>
          <li>Parceiros, somente com seu consentimento claro e informado</li>
        </ul>
        <p>
          2.2. Todos os parceiros e prestadores de serviço contratados devem
          manter a confidencialidade e proteger seus dados.
        </p>

        <h3 className="font-semibold mt-4">3. Cookies e Tecnologias de Rastreamento</h3>
        <p>
          3.1. Utilizamos cookies e tecnologias similares para entender como você usa nosso site e
          melhorar sua experiência.
        </p>
        <p>
          3.2. Você pode configurar seu navegador para bloquear cookies, mas isso pode limitar funcionalidades do site.
        </p>

        <h3 className="font-semibold mt-4">4. Segurança das Informações</h3>
        <p>
          4.1. Aplicamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, vazamentos ou alterações indevidas.
        </p>
        <p>
          4.2. Embora nos esforcemos para proteger suas informações, nenhum sistema é 100% seguro.
          Recomendamos cuidado ao compartilhar dados online.
        </p>

        <h3 className="font-semibold mt-4">5. Atualizações nesta Política</h3>
        <p>
          5.1. Podemos atualizar esta política a qualquer momento, com aviso prévio no site.
        </p>
        <p>
          5.2. Recomendamos que você revise esta página periodicamente para se manter informado(a).
        </p>

        <h3 className="font-semibold mt-4">6. Contato</h3>
        <p>
          Caso tenha dúvidas sobre esta política ou o uso de seus dados, entre em contato pelo e-mail:{" "}
          <a href="mailto:magdabyb@outlook.com" className="text-blue-600 underline">
            magdabyb@outlook.com
          </a>
        </p>
      </div>
    </section>
  );
}
