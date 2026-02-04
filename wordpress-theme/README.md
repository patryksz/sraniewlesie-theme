# Stranie w Lesie - WordPress Theme

Profesjonalne obozy i szkolenia B2B w naturalnym środowisku - WordPress Theme

## O Theme'ie

**Stranie w Lesie** to w pełni funkcjonalny WordPress theme stworzony na bazie nowoczesnej aplikacji React. Theme zawiera wszystkie niezbędne szablony do pracy z WordPressem, w tym:

- Strona główna (front-page.php)
- Strony (page.php)
- Posty (single.php)
- Archiwa (archive.php)
- Błędy 404 (404.php)
- Pełna hierarchia szablonów WordPress'a

Wszystkie assety (CSS, JavaScript) są pre-bundlowane i zoptymalizowane w folderze `assets/dist/`.

## Wymagania

- WordPress 5.0 lub wyżej
- PHP 7.4 lub wyżej
- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)

## Instalacja

### Krok 1: Przygotowanie plików theme'u

1. Pobierz folder `wordpress-theme` z tego repozytorium
2. Zmień nazwę folderu na preferowaną (opcjonalnie):
   ```bash
   mv wordpress-theme sraniewlesie
   ```

### Krok 2: Wgranie do WordPressa

1. Otwórz SFTP lub panel hostingu
2. Przejdź do folderu: `wp-content/themes/`
3. Wgraj folder theme'u (np. `sraniewlesie/`)

**Alternatywnie - przez panel WordPressa:**
1. Zaloguj się do administracji WordPress (wp-admin)
2. Przejdź do: **Wygląd → Motywy**
3. Kliknij "Dodaj nowy"
4. Kliknij "Wyślij motyw"
5. Wybierz plik ZIP zawierający folder theme'u

### Krok 3: Aktywacja theme'u

1. Przejdź do **Wygląd → Motywy**
2. Znajdź motyw "Stranie w Lesie"
3. Kliknij "Aktywuj"

### Krok 4: Konfiguracja

1. Przejdź do **Wygląd → Dostosowywanie**
2. Ustaw:
   - Logo (opcjonalnie)
   - Tytuł strony
   - Opis strony
3. Przejdź do **Wygląd → Menu**
4. Utwórz menu główne i przypisz je do lokacji "Primary Menu"

## Struktura Theme'u

```
wordpress-theme/
├── style.css              # Metainformacje theme'u
├── functions.php          # Funkcje theme'u (enqueue scripts, setup)
├── header.php             # Nagłówek strony (początek HTML)
├── footer.php             # Stopka strony (koniec HTML)
├── home.php               # Szablon strony głównej
├── front-page.php         # Szablon front page'u
├── page.php               # Szablon stron
├── single.php             # Szablon postów
├── archive.php            # Szablon archiwów i kategorii
├── 404.php                # Szablon strony błędu 404
├── index.php              # Fallback template
├── template-parts/        # Dodatkowe szablony (komponenty)
└── assets/                # Assety
    └── dist/              # Pre-bundlowane pliki
        ├── index.html     # HTML (nie jest używany w WP)
        ├── assets/        # Katalog z CSS i JS
        │   ├── index-D2D1bmC8.css
        │   └── index-B8bt8kWX.js
        └── ...            # Inne assety (obrazy, itp)
```

## Cechy Theme'u

✅ **Hierarchia szablonów WordPress'a** - Pełna obsługa standardowych szablonów WP  
✅ **Pre-bundlowane assety** - CSS i JS są już zoptymalizowane  
✅ **Responsywny design** - Działa na wszystkich urządzeniach  
✅ **Wsparcie dla menu** - Rejestracja menu głównego i stopki  
✅ **Wsparcie dla widgetów** - Sidebar i footer widgets  
✅ **Wsparcie dla thumbnails** - Galeria miniatur postów  
✅ **Wsparcie dla komentarzy** - Pełna obsługa systemu komentarzy  
✅ **Custom logo** - Możliwość ustawienia logo  
✅ **SEO friendly** - Semantyczne HTML5  

## Dostosowywanie

### Dodawanie stylów

Edytuj `functions.php` i zaktualizuj ścieżki do plików CSS (jeśli się zmieniły):

```php
wp_enqueue_style( 
    'stranie-styles',
    ASSETS_URI . '/dist/assets/index-D2D1bmC8.css',
    array(),
    THEME_VERSION
);
```

### Dodawanie szablonów

Utwórz nowe pliki w głównym folderze theme'u:
- `search.php` - Szablon wyników wyszukiwania
- `comments.php` - Szablon komentarzy
- Dowolne custom page templates

### Modyfikacja HTML

Edytuj pliki `.php` w głównym folderze theme'u aby dostosować strukturę HTML.

## Znane ograniczenia

- React nie jest uruchamiany na front-endu - theme korzysta ze statycznych CSS/JS
- DOM z Reacta nie jest renderowany - używane są szablony PHP
- Brak interaktywności Reacta - możesz dodać bezpośredni JavaScript w potrzebnych szablonach

## Aktualizacja Theme'u

Jeśli chcesz zaktualizować assety:

1. Zbuduj projekt React: `npm run build`
2. Zaktualizuj ścieżki w `functions.php` do nowych plików CSS/JS
3. Wgraj nowy folder `dist` do `assets/`
4. Czyszcz cache WordPressa

## Wsparcie i Problemy

Jeśli napotkasz problemy:

1. Sprawdź czy WordPress jest w wersji 5.0+
2. Sprawdź czy PHP jest w wersji 7.4+
3. Wyłącz inne pluginy i sprawdź czy theme działa
4. Czyszcz cache przeglądarki i WordPressa

## Licencja

GPL v2 lub nowsza

## Autor

SranieWLesie.pl

---

**Gotowy do użytku!** Theme jest w pełni skonkretyzowany i gotowy do zainstalowania na produkcji.
