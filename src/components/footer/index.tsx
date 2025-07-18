import Container from '@/components/container';

export default async function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; 2025 Dasom Ko</p>
        <p>
          This is an unofficial fan project and is not affiliated with{' '}
          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nintendo
          </a>{' '}
          or{' '}
          <a
            href="https://www.pokemon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Pokémon Company
          </a>
          .
          <br />
          Pokémon data is provided by{' '}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeAPI
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}
