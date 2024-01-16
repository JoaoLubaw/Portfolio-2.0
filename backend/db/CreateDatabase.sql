-- Criação do banco de dados
CREATE DATABASE pycodebr;

-- Conecta ao banco de dados
\c pycodebr;

-- Criação da tabela
CREATE TABLE projetos (
    id serial PRIMARY KEY,
    name varchar(100),
    "desc" varchar(1000),
    link varchar(200),
    git varchar(200),
    linkback varchar(200),
    gitback varchar(200),
    tags varchar(100)[]
);

-- Inserção de dados
INSERT INTO projetos (name, "desc", link, git, tags) VALUES (
'Efood',
'Site responsivo de marketplace alimentício, feito apartir do modelo sugerido pelo professor do Curso EBAC, projeto de conclusão de parte Front-End. Feito em React!',
'https://efood-mu.vercel.app',
'https://github.com/JoaoLubaw/efood/',
ARRAY['React', 'TypeScript', 'Responsivo', 'Consumo de Api', 'React-Redux', 'UseState', 'Formik', 'Input Mask', 'Yup', 'Eslint', 'Prettier', 'React-Router-Dom', 'Babel']
);