# Prompt: Stworzenie strony internetowej restauracji "Veloura" — Next.js + Tailwind CSS + Framer Motion

---

## Kontekst projektu

Stwórz kompletną, profesjonalną stronę internetową typu single-page dla luksusowej restauracji **"Veloura"**. Strona ma być napisana w **Next.js (App Router)**, ostylowana **Tailwind CSS** z niestandardowymi zmiennymi CSS, oraz wzbogacona o **zaawansowane animacje Framer Motion**. Cała treść strony ma być **po polsku**.

Strona powinna wyglądać jak portfolio najlepszego frontend designera — każdy piksel musi być dopracowany. Zdjęcia zastąp placeholderami z Unsplash (restauracja, jedzenie fine dining, koktajle, wino, steki).

---

## Paleta kolorów — zmienne CSS

Użyj poniższych zmiennych CSS jako fundamentu kolorystyki. Zdefiniuj je w `globals.css` i wykorzystuj w Tailwind za pomocą `@theme inline` lub konfiguracji `tailwind.config`:

```css
:root {
  --card: #F1F0E5;
  --ring: #A37764;
  --input: #BAAB92;
  --muted: #E4C7B8;
  --accent: #E4C7B8;
  --border: #BAAB92;
  --radius: 0.5rem;
  --popover: #FFFFFF;
  --primary: #A37764;
  --sidebar: #ebd6cb;
  --font-mono: Menlo, monospace;
  --font-sans: 'DM Sans', sans-serif;
  --secondary: #BAAB92;
  --background: #F1F0E5;
  --font-serif: Georgia, serif;
  --foreground: #56453F;
  --destructive: #1f1a17;
  --sidebar-accent: #C39E88;
  --sidebar-border: #A28777;
  --card-foreground: #56453F;
  --sidebar-primary: #A37764;
  --muted-foreground: #8A655A;
  --accent-foreground: #56453F;
  --popover-foreground: #56453F;
  --primary-foreground: #FFFFFF;
  --sidebar-foreground: #56453F;
  --secondary-foreground: #ffffff;
  --destructive-foreground: #FFFFFF;
}

.dark {
  --card: #3c332e;
  --ring: #C39E88;
  --input: #56453F;
  --muted: #56453F;
  --accent: #BAAB92;
  --border: #56453F;
  --popover: #3c332e;
  --primary: #C39E88;
  --sidebar: #1f1a17;
  --secondary: #8A655A;
  --background: #2d2521;
  --foreground: #F1F0E5;
  --destructive: #E57373;
  --sidebar-accent: #BAAB92;
  --sidebar-border: #56453F;
  --card-foreground: #F1F0E5;
  --sidebar-primary: #C39E88;
  --muted-foreground: #c5aa9b;
  --accent-foreground: #2d2521;
  --popover-foreground: #F1F0E5;
  --primary-foreground: #2d2521;
  --sidebar-foreground: #F1F0E5;
  --secondary-foreground: #F1F0E5;
  --destructive-foreground: #2d2521;
}
```

---

## Typografia

- **Nagłówki (display):** Użyj fontu **serif** o wyrafinowanym, luksusowym charakterze — np. `Playfair Display`, `Cormorant Garamond` lub `Libre Baskerville` z Google Fonts. Nagłówki mają być **wielkie (uppercase)**, z dużym letter-spacing i dramatycznym rozmiarem (np. hero title 6xl–9xl).
- **Body:** `DM Sans` (sans-serif) — czysty, nowoczesny, czytelny.
- **Akcenty / etykiety:** Drobny sans-serif z uppercase i zwiększonym letter-spacing.

---

## Struktura strony — sekcje (od góry do dołu)

### 1. NAWIGACJA (Navbar)
- Przyklejona do góry, semi-transparentna z backdrop-blur.
- Logo **"Veloura"** na środku (font serif, elegancki).
- Linki po lewej: `Menu`, `Bar`, `Doświadczenie`, `Rezerwacje`.
- Po prawej: `Zaloguj się`, ikona lupy (szukaj), `Koszyk (0)`.
- **Animacja:** Navbar pojawia się z góry z delikatnym slide-down (Framer Motion). Linki mają hover z podkreśleniem animowanym od lewej do prawej (clip-path lub scaleX). Na scroll navbar zmniejsza padding i dodaje cień.

### 2. HERO SECTION
- Pełnoekranowy obraz w tle — ciemne, luksusowe wnętrze baru/restauracji z ciepłym, złotym oświetleniem (obraz z Unsplash).
- Tekst overlay:
  - **Główny tytuł:** `ROZKOSZUJ SIĘ LUKSUSEM` — ogromny, serif, biały/kremowy, zajmujący ~60% szerokości ekranu.
  - **Podtytuł:** „Wyjątkowa podróż kulinarna, gdzie artyzm kulinarny spotyka się ze światowej klasy koktajlami w atmosferze ponadczasowej elegancji."
  - **CTA:** „Zarezerwuj Stolik →" — link z podkreśleniem i strzałką.
- **Animacje:**
  - Tytuł wjeżdża od dołu z `opacity: 0 → 1` i `y: 60 → 0`, z efektem staggered per-word.
  - Podtytuł fade-in z opóźnieniem 0.3s.
  - CTA fade-in z opóźnieniem 0.6s.
  - Delikatny parallax na obrazie tła (scroll-driven, 10-15% przesunięcia).
  - Obraz lekko się powiększa (scale 1.05) w ciągu 20s (CSS keyframe, efekt Ken Burns).

### 3. SEKCJA "GDZIE KAŻDY SMAK..." (Bento/Feature Grid)
- Nagłówek na jasnym tle: `GDZIE KAŻDY SMAK` / `OPOWIADA HISTORIĘ` — duży, serif, ciemnobrązowy.
- Siatka 5 kafelków (bento grid) z obrazami i podpisami:
  1. **Doświadczenie Live Lounge** — postać przy muzyce/scenie
  2. **Kuchnia Fine Dining** — eleganckie danie
  3. **Koktajle Firmowe** — drink z dymem/efektem
  4. **Prywatne Sale** — kelner przygotowujący stolik
  5. **Selekcja Win i Spirytusów** — regał z winami
- Layout: Nierówna siatka — 2 duże kafelki po bokach, 3 mniejsze w środku/reszta. Asymetryczny, redakcyjny układ.
- **Animacje:**
  - Każdy kafelek wjeżdża z `opacity: 0` i `y: 40` przy scroll (InView / whileInView).
  - Staggered delay między kafelkami (0.1s odstępu).
  - Na hover: obraz scale 1.08 z transition 0.5s ease-out, podpis przesuwa się lekko w górę.

### 4. DANIE FIRMOWE — "WAGYU RISOTTO"
- Layout dwukolumnowy: tekst po lewej, duże zdjęcie dania po prawej.
- Jasne tło (#F1F0E5).
- Tekst:
  - Tytuł: `WAGYU RISOTTO` — duży serif.
  - Podtytuł: `Danie Firmowe` — mniejszy, accent color.
  - Opis: „Nasze Wagyu Truffle Risotto łączy bogactwo kremowego ryżu Arborio z ziemistym aromatem czarnej trufli. Każdy kęs jest wzbogacony o delikatne plastry premium Wagyu, wióra Parmezanu i subtelny dreszcz olejku truflowego. Danie zaprojektowane by dostarczyć głębię, komfort i czystą elegancję w każdej łyżce."
- Zdjęcie: Tataki wołowe / sashimi na eleganckim talerzu.
- **Animacje:**
  - Tekst wjeżdża od lewej (`x: -60 → 0`), obraz od prawej (`x: 60 → 0`) — równoczesne, scroll-triggered.
  - Obraz ma delikatny efekt parallax (wolniejszy scroll niż reszta strony).

### 5. KOKTAJL FIRMOWY — "MIDNIGHT VELVET"
- Layout dwukolumnowy: duże zdjęcie koktajlu (espresso martini) po lewej, tekst po prawej.
- Ciemne tło / gradient do ciemnego.
- Tekst:
  - Tytuł: `MIDNIGHT VELVET` — duży serif.
  - Podtytuł: `Koktajl Firmowy`.
  - Opis: „Midnight Velvet stworzony jest dla tych, którzy cenią odważne, a zarazem gładkie smaki. Łącząc premium wódkę ze świeżym espresso i nutą gorzkiej czekolady, dostarcza wyrafinowaną równowagę intensywności i słodyczy. Zwieńczony jedwabistą pianką, ten koktajl jest idealnym towarzyszem na wieczór pełen luksusu."
  - CTA: „Skosztuj Elegancji →"
- **Animacje:**
  - Zdjęcie koktajlu — efekt reveal (clip-path od dołu do góry lub mask animation).
  - Tekst fade-in z prawej strony.
  - CTA button: na hover — tło wypełnia się od lewej do prawej kolorem primary z białym tekstem (transition clip-path lub width).

### 6. BESTSELLERY
- Sekcja z jasnym tłem po lewej i trzema kartami produktów po prawej.
- Lewy panel:
  - Tytuł: `BESTSELLERY` — ogromny serif.
  - Podtytuł: „Nasze Najbardziej Uwielbiane Dania i Drinki, Stworzone Na Każdą Luksusową Chwilę."
  - CTA: „Zobacz Pełne Menu →"
- Trzy karty produktów (siatka):
  1. **Château Margaux 2015** — Czerwone wino · 750ml — „Dodaj do koszyka"
  2. **Stek Veloura** — Dry-Aged Wagyu Ribeye · 500g — „Dodaj do koszyka"
  3. **Makaron z Czarną Truflą** — Makaron ręcznie robiony · 200g — „Dodaj do koszyka"
- Każda karta: pełnoekranowy obraz z ciemnym overlay na dole, nazwa produktu, opis, przycisk.
- **Animacje:**
  - Karty wjeżdżają z dołu, staggered (delay 0.15s każda).
  - Na hover karty: obraz scale 1.05, overlay rozjaśnia się, tekst przesuwa lekko w górę.
  - Przycisk "Dodaj do koszyka": na hover — efekt magnetic button (lekkie podążanie za kursorem w obrębie 5-10px) + zmiana koloru tła.

### 7. GALERIA ZDJĘĆ (Horizontal Scroll Strip)
- Pasek z ~8 kwadratowymi zdjęciami dań i drinków — automatyczny horizontal scroll lub marquee.
- Zdjęcia: pasta, koktajl różowy, spaghetti z owocami morza, stek na desce, drink tropikalny, talerz z mięsem, itp.
- **Animacje:**
  - Nieskończony marquee (infinite scroll) w lewo, pauza na hover.
  - Każde zdjęcie na hover: scale 1.1, lekki rotate (±2deg), z-index wyżej.

### 8. OPINIE GOŚCI (Testimonials)
- Duże zdjęcie tła — grupa przyjaciół wznoszących toast w restauracji, ciemny overlay.
- Poniżej: 4 kolumny z opiniami, jasne tło (#F1F0E5).
- Każda opinia:
  - 5 gwiazdek (ikony, kolor primary #A37764).
  - Tytuł opinii (bold serif).
  - Tekst opinii.
  - Nazwa użytkownika (@ElenaM, @JakubC, @ZofiaR, @DanielK).
- Opinie (po polsku):
  1. **Wyborne Doświadczenie** — „Od momentu wejścia wszystko było bez zarzutu — ambiance, obsługa i..."
  2. **Perfekcyjny Wieczór** — „Veloura to więcej niż restauracja; to doświadczenie. Koktajle były oszałamiające, a Wagyu Risotto niezapomniane."
  3. **Elegancka Uczta** — „Każde danie jak arcydzieło. Dbałość o szczegóły i ciepła atmosfera uczyniły nasz wieczór wyjątkowym."
  4. **Luksus Na Nowo** — „Byłem w wielu ekskluzywnych miejscach, ale Veloura wyznacza nowy standard luksusu i komfortu. Warto za każdym razem."
- **Animacje:**
  - Zdjęcie tła: parallax (wolniejszy scroll).
  - Karty opinii: staggered fade-in od dołu.
  - Gwiazdki: animowane pojawianie się jedna po drugiej (scale bounce, delay 0.05s).

### 9. SEKCJA REZERWACJI (CTA Booking)
- Jasne tło (beżowe #F1F0E5).
- Po lewej: duże zdjęcie steku na desce.
- Po prawej: duże zdjęcie elegancki koktajl old fashioned.
- Na środku tekst:
  - `ZAREZERWUJ STOLIK NA NIEZAPOMNIANĄ NOC PEŁNĄ ELEGANCJI I WYKWINTNEGO JEDZENIA`
  - CTA: „Zarezerwuj Doświadczenie →"
- **Animacje:**
  - Zdjęcia wjeżdżają z boków (lewe od lewej, prawe od prawej).
  - Tekst fade-in z scale 0.95 → 1.
  - Przycisk CTA: efekt shimmer/shine na hover (pseudo-element z gradientem przesuwa się od lewej do prawej).

### 10. STOPKA (Footer)
- Duże logo "VELOURA" — ogromny tekst serif zajmujący pełną szerokość, kolor ciemnobrązowy (#56453F), częściowo przysłonięty zdjęciem butelki whisky/alkoholu na środku.
- Nad logo: linki nawigacyjne (Menu, Bar, Doświadczenie, Rezerwacje) po lewej, „© 2025 Veloura. Wszelkie prawa zastrzeżone." po prawej.
- Butelka: obraz nakładający się na tekst z efektem z-index (butelka nad tekstem).
- **Animacje:**
  - Logo wjeżdża od dołu z dużym `y: 100`.
  - Butelka: parallax (scroll-driven, wolniejszy niż reszta).
  - Linki: hover underline animowany.

---

## Wymagania dotyczące animacji Framer Motion (GLOBALNE)

### Scroll-triggered animations:
- Użyj `motion.div` z `whileInView={{ opacity: 1, y: 0 }}` i `initial={{ opacity: 0, y: 50 }}`.
- `viewport={{ once: true, margin: "-100px" }}` — animacja odpala raz, z offsetem.

### Hover effects na przyciskach i linkach:
- **Magnetic button effect**: Przycisk lekko podąża za kursorem (onMouseMove, transform translate w obrębie ±8px). Implementacja: `onMouseMove` oblicza offset od centrum przycisku, `motion.button` z `animate={{ x, y }}` i `transition={{ type: "spring", stiffness: 300, damping: 20 }}`.
- **Fill effect**: Na hover pseudo-element lub dodatkowy `motion.span` wewnątrz przycisku rozszerza się od lewej do prawej, zmieniając tło.
- **Arrow animation**: Strzałka (→) na hover przesuwa się w prawo o 5px z transition.

### Page transitions:
- Sekcje pojawiają się sekwencyjnie z delikatnym stagger.
- Smooth scroll behavior na całej stronie.

### Micro-interactions:
- Kursor zmienia się na custom cursor (kółko) nad interaktywnymi elementami (opcjonalnie).
- Obrazy mają `loading="lazy"` i placeholder blur.
- Tekst w nagłówkach może mieć efekt split-text (każda litera animowana osobno) w kluczowych sekcjach (np. hero).

---

## Wymagania techniczne

1. **Framework:** Next.js 14+ z App Router.
2. **Styling:** Tailwind CSS v3/v4 z custom zmiennymi CSS (podane wyżej).
3. **Animacje:** Framer Motion (`motion`, `useInView`, `useScroll`, `useTransform`, `AnimatePresence`).
4. **Obrazy:** `next/image` z Unsplash URL-ami jako placeholder. Użyj odpowiednich `alt` po polsku.
5. **Fonty:** Google Fonts — `Playfair Display` (serif, nagłówki) + `DM Sans` (sans-serif, body). Zaimportuj przez `next/font/google`.
6. **Responsywność:** Pełna responsywność (mobile-first). Na mobile: nawigacja hamburger, sekcje układają się wertykalnie, galeria zmienia się w swipeable.
7. **Performance:** Lazy loading obrazów, `will-change` na animowanych elementach, `viewport={{ once: true }}` by nie powtarzać animacji.
8. **Accessibility:** Semantyczny HTML (`<nav>`, `<main>`, `<section>`, `<footer>`), `aria-label` na przyciskach, kontrast kolorów.

---

## Struktura plików (sugerowana)

```
app/
  layout.tsx          — Root layout z fontami i globalnymi stylami
  page.tsx            — Główna strona (importuje wszystkie sekcje)
  globals.css         — Zmienne CSS, reset, custom styles

components/
  Navbar.tsx
  HeroSection.tsx
  FeaturesGrid.tsx      — Sekcja "Gdzie każdy smak"
  SignatureDish.tsx      — Wagyu Risotto
  SignatureCocktail.tsx  — Midnight Velvet
  BestSellers.tsx
  PhotoGallery.tsx       — Marquee/galeria
  Testimonials.tsx
  BookingCTA.tsx
  Footer.tsx
  MagneticButton.tsx     — Reusable magnetic button component
  AnimatedText.tsx       — Reusable split-text animation component
```

---

## Styl wizualny — kluczowe zasady

- **Luksus i elegancja** — ciepłe brązy, kremowe beże, złociste odcienie. Zero jaskrawych kolorów.
- **Editorial layout** — asymetryczne siatki, duże białe przestrzenie, tekst jako element dekoracyjny.
- **Serif dominuje w nagłówkach** — duży, dramatyczny, uppercase z szerokim tracking.
- **Zdjęcia jako bohater** — pełnoekranowe, high-quality, z ciemnymi overlay'ami gdzie tekst jest na wierzchu.
- **Ciemne sekcje przeplatają się z jasnymi** — kontrast buduje rytm strony.
- **Każda interakcja jest odczuwalna** — żaden hover, click czy scroll nie powinien być "pusty". Zawsze jest feedback wizualny.

---

## WAŻNE

- Cała treść strony (menu, opisy, CTA, opinie, labele) musi być **po polsku**.
- Strona powinna sprawiać wrażenie zaprojektowanej przez top studio designerskie — nie generic template.
- Animacje muszą być **płynne (60fps)**, nie przesadzone — eleganckie, nie karnawałowe.
- Kod musi być czysty, modularny, z wydzielonymi komponentami.
