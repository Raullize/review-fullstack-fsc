import { redirect } from 'next/navigation';

// Este componente serve como a página inicial da aplicação.
// Sua única função é redirecionar o usuário para a página de produtos.
export default function RootPage() {
  redirect('/products');
}