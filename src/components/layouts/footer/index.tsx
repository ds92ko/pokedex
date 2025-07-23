import Pokeball from '@/components/common/pokeball';
import Container from '@/components/layouts/container';
import { content, copyright, footer, logo, logoText } from '@/components/layouts/footer/index.css';
import { link } from '@/styles/actions.css';

export default async function Footer() {
  return (
    <footer className={footer}>
      <Container>
        <div className={content}>
          <h2 className={logo}>
            <Pokeball size={30} />
            <span className={logoText}>Pokédex</span>
          </h2>
          <div>
            <p className={copyright}>&copy; 2025 Dasom Ko</p>
            <p>
              This is an unofficial fan project and is not affiliated with{' '}
              <a
                className={link.sm}
                href="https://www.nintendo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nintendo
              </a>{' '}
              or{' '}
              <a
                className={link.sm}
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
                className={link.sm}
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PokeAPI
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
