# 🐔 Sistema de Automação Chicken House

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![NetBeans](https://img.shields.io/badge/Apache%20NetBeans-1B6AC6?style=for-the-badge&logo=apache-netbeans&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge)

> Um sistema de gestão e automação para aviários focado em bem-estar animal, eficiência alimentar e controle de ambiência.


## 📖 Sobre o Projeto

O **Chicken House** é uma solução de software desenvolvida para modernizar a gestão de granjas de postura. O sistema automatiza processos críticos que hoje são manuais e propensos a erros, garantindo maior precisão e redução de desperdícios.

Atualmente em fase de MVP (Mínimo Produto Viável), o sistema opera em modo de **simulação**, validando a lógica de negócio e os algoritmos de controle antes da integração com hardware físico (sensores e atuadores).

### 🎯 Objetivos Principais
* **Controle de Fotoperíodo:** Automação da iluminação artificial (14h-16h de luz).
* **Nutrição de Precisão:** Cálculo exato de ração baseado na biomassa do lote (Peso x Qtd).
* **Auditoria:** Registro imutável de ações e geração de relatórios técnicos.


## 🛠️ Funcionalidades

- [x] **Gestão de Lotes:** Cadastro de quantidade de aves e peso médio.
- [x] **Cálculo Nutricional:** Algoritmo que define a quantidade diária de ração para evitar desperdício.
- [x] **Simulação de Hardware:**
    - Timer lógico para acendimento/desligamento de luzes.
    - Simulação de disparo do motor do distribuidor de ração.
- [x] **Monitoramento de Falhas:** Detecção lógica de inputs inválidos de sensores (ex: valores negativos).
- [x] **Relatórios:** Exportação de dados técnicos em PDF (via iText) e Logs de auditoria (`.txt`).


## 🧪 Cobertura de Testes (QA)

O projeto prioriza a confiabilidade através de testes unitários rigorosos cobrindo os Requisitos Funcionais (RF):

| ID | Caso de Teste | Objetivo / Descrição | Status |
|:---:|:---|:---|:---:|
| **CT-01** | Configuração de Iluminação | Valida a persistência dos horários do timer. | ✅ |
| **CT-02** | Automação da Lâmpada | Verifica a lógica temporal (Ligar/Desligar). | ✅ |
| **CT-03** | Cálculo de Ração | Garante precisão matemática (Qtd * Peso * Fator). | ✅ |
| **CT-04** | Integração Distribuidor | Simula o comando de liberação para o hardware. | ✅ |
| **CT-05** | Formatação de Logs | Padronização de strings para auditoria. | ✅ |
| **CT-06** | Atualização de Estoque | Valida decremento/incremento no saldo de aves. | ✅ |
| **CT-07** | Trava de Segurança | Bloqueia dosagens de ração acima do limite biológico. | ✅ |
| **CT-08** | Monitoramento de Sensores | Trata leituras de hardware inválidas. | ✅ |
| **CT-09** | Agendador de Alimentação | Valida gatilhos de horários pontuais. | ✅ |
| **CT-10** | Acumulador Financeiro | Testa a soma incremental de consumo diário. | ✅ |


## 🚀 Tecnologias Utilizadas

* **Linguagem:** Java (JDK 17+)
* **IDE:** Apache NetBeans
* **Interface Gráfica:** Java Swing
* **Testes:** JUnit 4/5
* **Relatórios:** Biblioteca iText PDF
* **Controle de Versão:** Git & GitHub

## 📦 Como Rodar o Projeto

### Pré-requisitos
* Java JDK instalado.
* Apache NetBeans (ou outra IDE Java).

### Passo a Passo
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/chicken-house.git](https://github.com/SEU-USUARIO/chicken-house.git)
    ```
2.  **Abra no NetBeans:**
    * Vá em `File` > `Open Project` e selecione a pasta clonada.
3.  **Adicione as Dependências:**
    * Certifique-se de que o JUnit e a biblioteca iText (`.jar`) estão no *Classpath* do projeto.
4.  **Execute:**
    * Rode o arquivo principal `Main.java` ou `DashboardView.java`.

## 📅 Roadmap de Desenvolvimento

O projeto segue um cronograma de 4 semanas:

- [x] **Semana 1:** Estruturação do Backend, Modelagem e Testes Unitários.
- [x] **Semana 2:** Desenvolvimento da Interface Gráfica (Swing).
- [x] **Semana 3:** Implementação da Simulação Temporal e Integração.
- [x] **Semana 4:** Persistência de dados, Relatórios PDF e entrega final.

## 📄 Documentação

A documentação completa dos requisitos e fluxos de dados pode ser encontrada na pasta [`/docs`](./docs) deste repositório:
* [Relatório Técnico](./docs/RelatorioTecnico.pdf)
* [Matriz de Requisitos](./docs/Requisitos.xlsx)

## ✒️ Autor

* **[Lucas José da Silva Santos]** - *Desenvolvedor Full Stack*
* **[Pietro Augusto de Oliveira Simões]** - *Desenvolvedor Design/Front-end*
