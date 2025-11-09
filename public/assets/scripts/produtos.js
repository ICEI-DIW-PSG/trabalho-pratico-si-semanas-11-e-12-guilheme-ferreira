const produtos = [
    {
        id: 0,
        nome: "EBOOK DE RECEITAS",
        preco: 60.00,
        imagem: "assets/images/produto1.jpg",
        descricao: "Aprenda as melhores receitas culinárias com este ebook completo. Contém mais de 50 receitas práticas e deliciosas, com ingredientes acessíveis e modo de preparo detalhado.",
        descricaoCompleta: "Este ebook é um guia completo para quem deseja aprender as melhores técnicas culinárias e preparar receitas deliciosas em casa. Desenvolvido por um chef profissional com mais de 15 anos de experiência, este material oferece 50+ receitas testadas e aprovadas, ingredientes acessíveis e fáceis de encontrar, modo de preparo passo a passo com fotos, dicas profissionais de culinária, tabela nutricional de cada receita, vídeos tutoriais exclusivos e acesso a comunidade de alunos. Após a compra, você receberá acesso imediato ao material através de um link de download. O acesso é vitalício e você poderá baixar quantas vezes desejar.",
        fotos: [
            "assets/images/produto1.jpg",
            "assets/images/produto2.jpg",
            "assets/images/produto3.jpg",
            "assets/images/produto4.jpg"
        ],
        autor: {
            nome: "João Silva",
            bio: "Chef profissional com 15 anos de experiência",
            imagem: "assets/images/autor1.jpg"
        },
        caracteristicas: [
            "Mais de 50 receitas",
            "Ingredientes acessíveis",
            "Modo de preparo detalhado",
            "Acesso vitalício",
            "Suporte por email"
        ],
        informacoes: {
            formato: "PDF + Vídeo",
            tamanho: "45 MB",
            acesso: "Vitalício",
            suporte: "Email"
        }
    },
    {
        id: 1,
        nome: "MÉTODO DMS",
        preco: 150.00,
        imagem: "assets/images/produto2.jpg",
        descricao: "Aprenda o método DMS revolucionário para otimizar sua estratégia de marketing digital. Este curso prático oferece ferramentas e técnicas comprovadas para aumentar suas vendas.",
        descricaoCompleta: "O Método DMS é uma estratégia revolucionária desenvolvida por especialistas em marketing digital. Este curso prático oferece ferramentas e técnicas comprovadas para aumentar suas vendas e otimizar sua presença online. Você aprenderá desde o básico até estratégias avançadas de marketing digital, com acesso a ferramentas premium e suporte direto com especialista.",
        fotos: [
            "assets/images/produto2.jpg",
            "assets/images/produto1.jpg",
            "assets/images/produto3.jpg",
            "assets/images/produto4.jpg"
        ],
        autor: {
            nome: "Maria Santos",
            bio: "Especialista em marketing digital com 10 anos de experiência",
            imagem: "images/autor2.jpg"
        },
        caracteristicas: [
            "Método exclusivo e comprovado",
            "Acesso a ferramentas premium",
            "Suporte direto com especialista",
            "Atualizações vitalícias",
            "Certificado de conclusão"
        ],
        informacoes: {
            formato: "Vídeo + Material em PDF",
            tamanho: "2.5 GB",
            acesso: "Vitalício",
            suporte: "Chat ao vivo"
        }
    },
    {
        id: 2,
        nome: "INGLÊS AVANÇADO",
        preco: 450.00,
        imagem: "assets/images/produto3.jpg",
        descricao: "Domine o inglês avançado com este curso completo. Aprenda gramática, vocabulário e pronúncia com aulas interativas e exercícios práticos.",
        descricaoCompleta: "Este curso de inglês avançado foi desenvolvido por um professor nativo com 20 anos de experiência. Você aprenderá não apenas a gramática, mas também expressões idiomáticas, pronúncia correta e como se comunicar naturalmente com falantes nativos. Inclui aulas com professor nativo, exercícios interativos, certificado internacionalmente reconhecido, acesso a comunidade de alunos e suporte personalizado.",
        fotos: [
            "assets/images/produto3.jpg",
            "assets/images/produto1.jpg",
            "assets/images/produto2.jpg",
            "assets/images/produto4.jpg"
        ],
        autor: {
            nome: "David Thompson",
            bio: "Professor nativo de inglês com 20 anos de experiência",
            imagem: "images/autor3.jpg"
        },
        caracteristicas: [
            "Aulas com professor nativo",
            "Exercícios interativos",
            "Certificado internacionalmente reconhecido",
            "Acesso a comunidade de alunos",
            "Suporte personalizado"
        ],
        informacoes: {
            formato: "Vídeo HD + Exercícios",
            tamanho: "3.2 GB",
            acesso: "Vitalício",
            suporte: "Email + Chat"
        }
    },
    {
        id: 3,
        nome: "TRÁFEGO PAGO DO ZERO",
        preco: 250.00,
        imagem: "assets/images/produto4.jpg",
        descricao: "Aprenda a criar campanhas de tráfego pago do zero. Este curso cobre Google Ads, Facebook Ads e outras plataformas de publicidade digital.",
        descricaoCompleta: "Aprenda a criar campanhas de tráfego pago do zero com este curso completo. Você dominará Google Ads, Facebook Ads, Instagram Ads e outras plataformas. Inclui estratégias de otimização, análise de métricas e como maximizar seu ROI. Desenvolvido por especialista em publicidade digital com ROI comprovado.",
        fotos: [
            "assets/images/produto4.jpg",
            "assets/images/produto1.jpg",
            "assets/images/produto2.jpg",
            "assets/images/produto3.jpg"
        ],
        autor: {
            nome: "Carlos Mendes",
            bio: "Especialista em publicidade digital com ROI comprovado",
            imagem: "images/autor4.jpg"
        },
        caracteristicas: [
            "Google Ads e Facebook Ads",
            "Otimização de campanhas",
            "Análise de métricas",
            "Suporte com especialista",
            "Atualizações mensais"
        ],
        informacoes: {
            formato: "Vídeo + Planilhas",
            tamanho: "1.8 GB",
            acesso: "Vitalício",
            suporte: "Email + Comunidade"
        }
    },
    {
        id: 4,
        nome: "SAÚDE E BEM ESTAR",
        preco: 180.00,
        imagem: "assets/images/produto2.jpg",
        descricao: "Guia completo para melhorar sua saúde e bem-estar. Aprenda técnicas de meditação, exercícios e nutrição.",
        descricaoCompleta: "Um guia completo desenvolvido por profissionais de saúde para melhorar sua qualidade de vida. Inclui técnicas de meditação, exercícios práticos, dicas de nutrição e muito mais.",
        fotos: [
            "assets/images/produto2.jpg",
            "assets/images/produto1.jpg",
            "assets/images/produto3.jpg",
            "assets/images/produto4.jpg"
        ],
        autor: {
            nome: "Dra. Ana Costa",
            bio: "Médica especialista em bem-estar integral",
            imagem: "assets/images/autor2.jpg"
        },
        caracteristicas: [
            "Técnicas de meditação",
            "Exercícios práticos",
            "Dicas de nutrição",
            "Acesso vitalício",
            "Comunidade de apoio"
        ],
        informacoes: {
            formato: "Vídeo + PDF",
            tamanho: "1.2 GB",
            acesso: "Vitalício",
            suporte: "Email"
        }
    },
    {
        id: 5,
        nome: "CURSO - EXCEL AVANÇADO",
        preco: 70.00,
        imagem: "assets/images/produto3.jpg",
        descricao: "Domine o Excel com técnicas avançadas. Aprenda macros, análise de dados e automação.",
        descricaoCompleta: "Curso completo de Excel avançado para profissionais que desejam dominar a ferramenta. Aprenda desde fórmulas complexas até automação com macros e análise de dados avançada.",
        fotos: [
            "assets/images/produto3.jpg",
            "assets/images/produto1.jpg",
            "assets/images/produto2.jpg",
            "assets/images/produto4.jpg"
        ],
        autor: {
            nome: "Pedro Oliveira",
            bio: "Especialista em Excel com 12 anos de experiência",
            imagem: "images/autor3.jpg"
        },
        caracteristicas: [
            "Fórmulas avançadas",
            "Macros e automação",
            "Análise de dados",
            "Exercícios práticos",
            "Certificado de conclusão"
        ],
        informacoes: {
            formato: "Vídeo + Arquivos Excel",
            tamanho: "800 MB",
            acesso: "Vitalício",
            suporte: "Email"
        }
    }
];

function obterProduto(id) {
    return produtos.find(p => p.id === parseInt(id));
}

function obterTodosProdutos() {
    return produtos;
}

function obterProdutosDestaque() {

    return produtos.slice(0, 3);
}

function obterProdutosRecomendados() {

    return produtos.slice(3, 6);
}

function adicionarAoCarrinho(id) {
    alert("Produto adicionado ao carrinho!");
}

function adicionarAListaDesejos(id) {
    alert("Produto adicionado à lista de desejos!");
}

