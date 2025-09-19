<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Gerador de QR Code e Senha</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

        :root {
            --bg-color: #f4f7f6;
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --highlight-color: #e74c3c;
            --card-bg: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--bg-color);
            color: var(--primary-color);
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: var(--card-bg);
            padding: 40px;
            border-radius: 10px;
            box-shadow: var(--shadow);
        }

        header {
            text-align: center;
            margin-bottom: 40px;
        }

        h1 {
            color: var(--secondary-color);
            font-size: 2.5rem;
            font-weight: 700;
            border-bottom: 3px solid var(--secondary-color);
            display: inline-block;
            padding-bottom: 5px;
        }

        h2 {
            color: var(--primary-color);
            font-size: 1.8rem;
            font-weight: 700;
            margin-top: 30px;
            padding-left: 10px;
            border-left: 4px solid var(--highlight-color);
        }

        p {
            font-size: 1rem;
            margin-bottom: 15px;
        }

        code {
            background-color: #ecf0f1;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: 'Courier New', Courier, monospace;
            color: var(--primary-color);
        }

        pre {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
        }

        ul {
            list-style-type: none;
            padding-left: 0;
        }

        li {
            background: var(--bg-color);
            margin-bottom: 10px;
            padding: 15px;
            border-left: 5px solid var(--secondary-color);
            border-radius: 5px;
            transition: transform 0.2s ease-in-out;
        }

        li:hover {
            transform: translateX(5px);
        }

        li strong {
            color: var(--highlight-color);
            font-size: 1.1rem;
        }

        .section-separator {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(44, 62, 80, 0.75), rgba(0, 0, 0, 0));
            margin: 40px 0;
        }

    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Projeto: Gerador de QR Code e Senha</h1>
        </header>

        <p>Este é um projeto simples, porém poderoso, construído com <strong>Node.js</strong> para gerar QR Codes e senhas de forma rápida e eficiente diretamente do seu terminal. A ferramenta utiliza a linha de comando para interagir com o usuário, tornando-a ideal para automação de tarefas ou uso diário.</p>

        <hr class="section-separator">

        <h2>Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>Node.js:</strong> A base do projeto, responsável por executar o script.</li>
            <li><strong>npm:</strong> Gerenciador de pacotes para instalar as dependências.</li>
            <li><strong>Inquirer:</strong> Biblioteca para criar uma interface interativa na linha de comando.</li>
            <li><strong>QR Code:</strong> Pacote para gerar os QR Codes a partir de uma URL ou texto.</li>
        </ul>

        <hr class="section-separator">

        <h2>Passo a Passo de Instalação e Execução</h2>

        <p>Siga estes passos para configurar e executar o projeto em sua máquina.</p>

        <h3>1. Clone o Repositório</h3>
        <p>Primeiro, clone este repositório para o seu ambiente local usando o comando <code>git clone</code>.</p>
        <pre><code>git clone [URL_DO_SEU_REPOSITORIO]</code></pre>

        <h3>2. Navegue até a Pasta do Projeto</h3>
        <p>Entre na pasta do projeto recém-clonada:</p>
        <pre><code>cd [NOME_DA_PASTA]</code></pre>

        <h3>3. Instale as Dependências</h3>
        <p>Utilize o <strong>npm</strong> para instalar todas as bibliotecas necessárias, incluindo o <code>inquirer</code> e o <code>qrcode</code>.</p>
        <pre><code>npm install</code></pre>

        <h3>4. Execute o Script</h3>
        <p>Agora, você pode iniciar o gerador com o seguinte comando. Isso abrirá a interface interativa no seu terminal.</p>
        <pre><code>node index.js</code></pre>

        <hr class="section-separator">

        <h2>Funcionalidades</h2>
        <p>O script irá guiar você através das seguintes opções:</p>
        <ul>
            <li>
                <strong>Gerar QR Code:</strong> Você será solicitado a inserir a URL ou o texto que deseja transformar em um QR Code. O script então gera o QR Code e o exibe no terminal.
            </li>
            <li>
                <strong>Gerar Senha:</strong> Uma senha segura e aleatória será gerada e exibida.
            </li>
        </ul>

        <hr class="section-separator">

        <h2>Estrutura do Projeto</h2>
        <p>O código está organizado da seguinte forma:</p>
        <ul>
            <li><strong><code>index.js</code>:</strong> O arquivo principal que contém toda a lógica do programa.</li>
            <li><strong><code>package.json</code>:</strong> O arquivo de configuração que lista as dependências do projeto.</li>
            <li><strong><code>README.md</code>:</strong> Este arquivo, com detalhes sobre o projeto.</li>
        </ul>
        
    </div>
</body>
</html>
