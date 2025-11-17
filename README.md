# Pharmyrus Website

Site institucional da Pharmyrus - Plataforma de Inteligência em Propriedade Intelectual Farmacêutica.

## 🚀 Deploy na Netlify

### Opção 1: Deploy Automático via GitHub

1. Faça push deste código para um repositório GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/pharmyrus-site.git
git push -u origin main
```

2. Acesse [Netlify](https://app.netlify.com)
3. Clique em "Add new site" → "Import an existing project"
4. Conecte com GitHub e selecione o repositório
5. **IMPORTANTE**: Configure assim:
   - Branch to deploy: `main`
   - Build command: **(deixe em branco)**
   - Publish directory: `.` **(apenas um ponto)** ou deixe em branco
6. Clique em "Deploy"

⚠️ **Veja o arquivo NETLIFY_CONFIG.md para instruções detalhadas**

### Opção 2: Deploy Manual via Netlify Drop (MAIS FÁCIL)

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste TODOS os arquivos da pasta (index.html, css, js, imagens, _redirects)
3. O site será publicado automaticamente

## 📁 Estrutura do Projeto

```
pharmyrusite-main/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript
├── logo.png            # Logo
├── *.png               # Imagens
├── netlify.toml        # Configuração Netlify
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- 3Dmol.js (Visualização molecular)
- Google Fonts (Montserrat, Unbound)

## 📝 Configuração

O arquivo `netlify.toml` já está configurado para:
- Publicar o diretório raiz como site estático
- Redirecionar todas as rotas para index.html (SPA support)
- Node.js 18 como ambiente de build

## 🔧 Desenvolvimento Local

Para testar localmente, você pode usar qualquer servidor HTTP estático:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server -p 8000

# Com PHP
php -S localhost:8000
```

Acesse: http://localhost:8000

## 📞 Contato

- Email: contato@pharmyrus.com
- WhatsApp: +55 (11) 99573-6666

---

© 2025 Pharmyrus. Todos os direitos reservados.
