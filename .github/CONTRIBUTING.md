# Guia de Contribuição

Obrigado por considerar contribuir com o Caramelo Tech! 🎉

## Como Adicionar Novos Membros

Para adicionar um novo membro à equipe, siga os passos abaixo:

### 1. Gerar Avatar

Use o [DiceBear Editor](https://editor.dicebear.com/) para criar um avatar personalizado:

#### Configurações Padrão:

- **Style**: `adventurer` (primeiro style disponível)
- **Background**: Desabilitado (sem background)
- **Seed**: Use o primeiro nome do membro para gerar o avatar

#### Passos:

1. Acesse https://editor.dicebear.com/
2. Selecione o style **"Adventurer"**
3. No campo "Seed", digite o primeiro nome do membro
4. Desabilite o background nas configurações
5. Personalize outros detalhes conforme desejar
6. Baixe a imagem SVG ou PNG

### 2. Adicionar a Foto

**Upload de Arquivo**

- Salve a imagem na pasta `public/members/` com o nome `nomedapessoa.png`
- A foto deve estar otimizada e em formato PNG ou SVG

### 3. Editar o Arquivo de Membros

Adicione um novo objeto JSON no arquivo `src/data/members.json`:

```json
{
  "name": "Nome Completo",
  "description": "Breve descrição sobre você e seus interesses",
  "tags": ["Skill 1", "Skill 2", "Skill 3"],
  "photo": "/members/nomedapessoa.png",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seu-usuario",
  "website": "https://seu-site.com",
  "instagram": "https://instagram.com/seu-usuario"
}
```

#### Campos:

- **name** (obrigatório): Nome completo do membro
- **description** (obrigatório): Breve descrição (1-2 frases)
- **tags** (obrigatório): Array com até 3 skills/áreas de interesse
- **photo** (obrigatório): Caminho local (`/members/foto.png`) ou URL da API DiceBear
- **github** (opcional): Link do perfil GitHub
- **linkedin** (opcional): Link do perfil LinkedIn
- **website** (opcional): Link do seu site pessoal
- **instagram** (opcional): Link do perfil Instagram

### 4. Enviar sua Contribuição

1. Faça um fork do repositório
2. Crie uma branch com o nome `add-member-seunome`
3. Faça commit das suas alterações
4. Abra um Pull Request descrevendo sua adição

## Outras Contribuições

Contribuições de melhorias, correções de bugs e novas funcionalidades são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Dúvidas? Entre em contato através das issues do repositório!
