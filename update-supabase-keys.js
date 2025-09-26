#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔐 ATUALIZADOR DE CHAVES DO SUPABASE\n');
console.log('Este script vai ajudar você a atualizar as chaves do Supabase de forma segura.\n');

async function updateKeys() {
  console.log('📋 INSTRUÇÕES:');
  console.log('1. Acesse: https://supabase.com/dashboard');
  console.log('2. Selecione seu projeto');
  console.log('3. Vá em Settings > API');
  console.log('4. Regenere a chave "anon public"');
  console.log('5. Copie a nova chave e cole aqui\n');

  // Atualizar ambiente de desenvolvimento
  console.log('🔧 AMBIENTE DE DESENVOLVIMENTO');
  console.log('Projeto: https://supabase.com/dashboard (selecione seu projeto de desenvolvimento)\n');

  const newDevKey = await askQuestion('Cole a NOVA chave anon do ambiente de DESENVOLVIMENTO: ');

  if (newDevKey && newDevKey.trim()) {
    updateEnvFile('.env.local', newDevKey.trim());
    console.log('✅ .env.local atualizado!\n');
  } else {
    console.log('❌ Chave inválida, pulando ambiente de desenvolvimento\n');
  }

  // Atualizar ambiente de produção
  console.log('🚀 AMBIENTE DE PRODUÇÃO');
  console.log('Projeto: https://supabase.com/dashboard (selecione seu projeto de produção)\n');

  const newProdKey = await askQuestion('Cole a NOVA chave anon do ambiente de PRODUÇÃO: ');

  if (newProdKey && newProdKey.trim()) {
    updateEnvFile('.env.production', newProdKey.trim());
    console.log('✅ .env.production atualizado!\n');
  } else {
    console.log('❌ Chave inválida, pulando ambiente de produção\n');
  }

  console.log('🎉 CONCLUÍDO!');
  console.log('\n📝 PRÓXIMOS PASSOS:');
  console.log('1. npm run build');
  console.log('2. Fazer deploy da aplicação');
  console.log('3. Testar formulários no site');
  console.log('\n⚠️  IMPORTANTE: As chaves antigas foram invalidadas!');

  rl.close();
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function updateEnvFile(filename, newKey) {
  const filePath = path.join(__dirname, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Arquivo ${filename} não encontrado!`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Regex para encontrar e substituir a chave anon
  const keyRegex = /NEXT_PUBLIC_SUPABASE_ANON_KEY=.*/;
  const newLine = `NEXT_PUBLIC_SUPABASE_ANON_KEY=${newKey}`;

  if (keyRegex.test(content)) {
    content = content.replace(keyRegex, newLine);
  } else {
    // Se não encontrar a linha, adiciona
    content += `\nNEXT_PUBLIC_SUPABASE_ANON_KEY=${newKey}`;
  }

  fs.writeFileSync(filePath, content);
}

// Executar o script
updateKeys().catch(console.error);