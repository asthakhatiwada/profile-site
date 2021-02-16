<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  import star from "../../public/heroicons/solid/star.svg";
</script>

<!--
hack to enable dark mode based on the "dark" class that is outside of the scope of this component
https://github.com/svelte-add/tailwindcss/issues/8
-->
<style global>
  .publication-item {
    @apply mx-4 mb-8;
  }

  :local(.special-text) {
    @apply text-yellow-600 dark:text-yellow-300;
  }

  .image-wrapper {
    @apply mr-8 mb-2;
  }

  .publication-image {
    @apply border shadow-md m-auto;
    width: 110px;
    min-width: 110px;
  }
</style>

<h1 class="text-xl font-bold mb-4">Peer-reviewed Publications</h1>
<div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/pr.png" />
    </div>
    <div>
      <p>
        <strong>Khatiwada A</strong>, Wolf BJ, Mulligan JK, Shary JR, Hewison M,
        Baatz JE, Newton DA, Hawrylowicz C, Hollis BW, Wagner CL.
        <a
          class="external-link"
          target="_blank"
          href="https://pubmed.ncbi.nlm.nih.gov/32311700/">Effects of vitamin D
          supplementation on circulating concentrations of growth factors and
          immune-mediators in healthy women during pregnancy</a>.
        <span class="italic">Pediatr Res.</span>
        2020 Apr; 20:1-9. PMID: 32311700.
      </p>
      <p class="special-text">
        <InlineSVG
          src={star}
          class="h-6 w-6 flex-shrink-0 fill-current inline-block mr-1" />
        Highlighted in the Editor’s Focus for the February 2021 print issue of
        Pediatric Research
      </p>
    </div>
  </div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/csam.gif" />
    </div>
    <div>
      <p>
        Nam JH*,
        <strong>Khatiwada A*</strong>, Matthews LJ, Schulte BA, Dubno JR, Chung
        D.
        <a
          class="external-link"
          target="_blank"
          href="https://pubmed.ncbi.nlm.nih.gov/32566544/">
          Ranking subjects based on paired compositional data with application
          to age-related hearing loss subtyping</a>.
        <span class="italic">Commun Stat Appl Methods.</span>
        2020 Mar;27(2):225-239. PMID: 32566544; PMCID: PMC7304553 (*joint first
        author).
      </p>
    </div>
  </div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/po.gif" />
    </div>
    <p>
      <strong>Khatiwada A</strong>, Shoaibi A, Neelon B, Emond JA,
      Benjamin-Neelon SE.
      <a
        class="external-link"
        target="_blank"
        href="https://pubmed.ncbi.nlm.nih.gov/30019385/">Household chaos during
        infancy and infant weight status at 12 months</a>.
      <span class="italic">Pediatr Obes.</span>
      2018 Oct;13(10):607-613. PMID: 30019385; PMCID: PMC6300983.
    </p>
  </div>
</div>
<h1 class="text-xl font-bold mb-4">Manuscript under Review</h1>
<div>
  <div class="publication-item">
    <p>
      The Pelotonia Institute for Immuno-Oncology, The Ohio State University
      CD24Fc Covid19 Team (…,
      <strong>Khatiwada A</strong>, …, Chung D, Li Z). Immunological insights
      into the therapeutic roles of soluble CD24 against severe COVID-19.
      Submitted to
      <span class="italic">New England Journal of Medicine.</span>
    </p>
  </div>
  <div class="publication-item">
    <p>
      <strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos P, Pietrzak M,
      Lawson A, Hunt KJ, Kim HJ, Chung D. GPA-Tree: Statistical Approach for
      Functional-Annotation-Tree-Guided Prioritization of GWAS results.
      Submitted to
      <span class="italic">Bioinformatics.</span>
    </p>
  </div>
  <div class="publication-item">
    <p>
      Ayoub I, Wolf BJ, Geng L, Song H,
      <strong>Khatiwada A</strong>, Tsao B, Oats J, Rovin B. Prediction Models
      of Treatment Response in Lupus Nephritis. Submitted to
      <span class="italic">Kidney International.</span>
    </p>
  </div>
  <div class="publication-item">
    <p>
      Richard MLL, Wirth JR,
      <strong>Khatiwada A</strong>, Chung D, Eudaly J, Gilkeson GS, Cunningham
      MA. Deletion of ERα expression in CD11c+ cells reduce survival in female
      mice and impacts pathways associated with cytokine signaling. Submitted to
      <span class="italic">Journal of Immunology.</span>
    </p>
  </div>
</div>
