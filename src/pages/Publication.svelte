<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  import star from "../../public/heroicons/solid/star.svg";
</script>

<style>
  .publication-item {
    @apply mx-4 mb-8;
  }

  .special-text {
    @apply text-yellow-400 ml-4 flex items-center;
  }
</style>

<h1 class="text-2xl font-bold mb-4">Publications</h1>
<h2 class="text-xl font-bold mb-4">Peer-reviewed Publications</h2>
<div>
  <div class="publication-item sm:flex">
    <div class="mr-4 mb-2" style="width: 110px; min-width: 110px"><img src="/public/img/pr.png" /></div>
    <div>
      <p>
        Khatiwada A, Wolf BJ, Mulligan JK, Shary JR, Hewison M, Baatz JE, Newton
        DA, Hawrylowicz C, Hollis BW, Wagner CL. Effects of vitamin D
        supplementation on circulating concentrations of growth factors and
        immune-mediators in healthy women during pregnancy. Pediatr Res. 2020
        Apr; 20:1-9. PMID: 32311700.
      </p>
      <p class="special-text">
        <InlineSVG src={star} class="h-6 w-6 fill-current inline-block mr-1" />
        Highlighted in the Editor’s Focus for the February 2021 print issue of
        Pediatric Research
      </p>
    </div>
  </div>
  <div class="publication-item sm:flex">
    <div class="mr-4 mb-2" style="width: 110px; min-width: 110px"><img src="/public/img/csam.gif" /></div>
    <div>
      <p>
        Nam JH*, Khatiwada A*, Matthews LJ, Schulte BA, Dubno JR, Chung
        D. Ranking subjects based on paired compositional data with application
        to age-related hearing loss subtyping. Commun Stat Appl Methods. 2020
        Mar;27(2):225-239. PMID: 32566544; PMCID: PMC7304553 (*joint first
        author).
      </p>
      <p class="special-text">
        <InlineSVG src={star} class="h-6 w-6 fill-current inline-block mr-1" />
        <span>First joint author</span>
      </p>
    </div>
  </div>
  <div class="publication-item sm:flex">
    <div class="mr-4 mb-2" style="width: 110px; min-width: 110px"><img src="/public/img/po.gif" /></div>
    <p>
      Khatiwada A, Shoaibi A, Neelon B, Emond JA, Benjamin-Neelon SE. Household
      chaos during infancy and infant weight status at 12 months. Pediatr
      Obes. 2018 Oct;13(10):607-613. PMID: 30019385; PMCID: PMC6300983.
    </p>
  </div>
</div>
<h2 class="text-xl font-bold mb-4">Manuscript under Review</h2>
<div>
  <div class="publication-item">
    <p>
      The Pelotonia Institute for Immuno-Oncology, The Ohio State University
      CD24Fc Covid19 Team (…, Khatiwada A, …, Chung D, Li Z). Immunological
      insights into the therapeutic roles of soluble CD24 against severe
      COVID-19. Submitted to New England Journal of Medicine.
    </p>
  </div>
  <div class="publication-item">
    <p>
      Khatiwada A, Wolf BJ, Yilmaz AS, Ramos P, Pietrzak M, Lawson A, Hunt KJ,
      Kim, HJ, Chung D. GPA-Tree: Statistical Approach for
      Functional-Annotation-Tree-Guided Prioritization of GWAS results.
      Submitted to Bioinformatics.
    </p>
  </div>
  <div class="publication-item">
    <p>
      Ayoub I, Wolf BJ, Geng L, Song H, Khatiwada A, Tsao B, Oats J, Rovin B.
      Prediction Models of Treatment Response in Lupus Nephritis. Submitted to
      Kidney International.
    </p>
  </div>
  <div class="publication-item">
    <p>
      Richard MLL, Wirth JR, Khatiwada A, Chung D, Eudaly J, Gilkeson GS,
      Cunningham MA. Deletion of ERα expression in CD11c+ cells reduce survival
      in female mice and impacts pathways associated with cytokine signaling.
      Submitted to Journal of Immunology.
    </p>
  </div>
</div>
