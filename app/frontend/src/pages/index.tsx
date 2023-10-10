import React, { useState } from 'react';
import Header from '@/components/header';

export default function Home() {
  const [user, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do login para o servidor
    console.log('Email:', user);
    console.log('Senha:', password);
  };



  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex gap-6 justify-center mt-40">
        <div className='flex flex-col gap-4 border-white rounded-xl h-56 border justify-center p-4'>
          <h2 className='flex justify-center text-xl'>Login:</h2>
          <form onSubmit={handleSubmit} className=''>
              <label className=''>
                Usuário:
                <input
                  type="text"
                  value={user}
                  onChange={handleEmailChange}
                  required
                  className='mb-1 ml-1 text-black'
                />
              </label>
              <br />
              <label>
                Senha:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className='ml-1 text-black'
                />
              </label>
              <br />
              <div className='flex flex-auto items-center justify-center rounded-xl border border-white mt-2'>
                <button type="submit" className=''>Entrar</button>
              </div>
            </form>
          </div>
        </main>

      <footer className='flex justify-center'>
        <span>
          Desenvolvido com 💛 por PHCA.dev 
        </span>
      </footer>
    </div>
  )
}
