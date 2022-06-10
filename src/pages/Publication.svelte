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
<h2 class="text-xl font-bold mb-4">2022</h2>
<div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/smj.png" />
    </div>
    <div>
      <p>
        Burton JH, <strong>Khatiwada A</strong>, Chung D, Meissner EG. 
        <a
           class="external-link"
           target="_blank"
           href="https://10.14423/SMJ.0000000000001402">Association of Referral Source and Substance Use with Hepatitis C Virus 
        Outcomes at a Southern Academic Medical Center.</a>  
        <span class="italic">Southern Medical Journal. </span>
        2022 Jun;115(6):352-357. PMID: 35649518. 
        </p>
      </div>
    </div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/alr.jpeg" />
    </div>
    <div>
      <p>
        Beswick DM, Humphries SM, Miller JE, Balkissoon CD, <strong>Khatiwada A</strong>, Vladar EK, Ramakrishnan VR, Lynch DA, Taylor-Cousar JL
        <a
           class="external-link"
           target="_blank"
           href="https://10.1002/alr.23016">Objective and patient-based measures of chronic rhinosinusitis in people with cystic fibrosis 
          treated with highly effective modulator therapy.</a>.
        <span class="italic">International Forum of Allergy & Rhinology. </span>
        2022 May 20. PMID: 35595546.
        </p>
      </div>
    </div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/journalho.jpeg" />
    </div>
    <div>
      <p>
        Song NJ, Allen C, Vilgelm AE, Riesenberg BP, Weller KP, Reynolds K, 
        Chakravarthy KB, Kumar A, <strong>Khatiwada A</strong>, Sun Z, Ma A, Chang Y, Yusuf M,Li A, 
        Zeng C, Evans JP, Bucci D, Gunasena M, Xu M, Liyanage NPM, Bolyard C, 
        Velegraki M, Liu SL, Ma Q, Devenport M, Liu Y, Zheng P, Malvestutto CD, 
        Chung D, Li Z.
        <a
           class="external-link"
           target="_blank"
           href="https://doi.org/10.1186/s13045-021-01222-y">Treatment with soluble CD24 attenuates COVID-19-associated systemic immunopathology</a>.
        <span class="italic">Journal of Hematology & Oncology. </span>
        15, 5 (2022).
        </p>
      </div>
    </div>
  
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/bioinformatics.gif" />
    </div>
    <div>
      <p>
        <strong>Khatiwada A</strong>, Wolf BJ, Yilmaz AS, Ramos PS, Pietrzak M, Lawson A, Hunt KJ, Kim HJ, Chung D.
        <a
           class="external-link"
           target="_blank"
           href="https://doi.org/10.1093/bioinformatics/btab802">GPA-Tree: 
          Statistical Approach for Functional-Annotation-Tree-Guided Prioritization of GWAS Results</a>.
        <span class="italic">Bioinformatics</span>
        Volume 38, Issue 4, 15 February 2022, Pages 1067–1074.
        </p>
      </div>
    </div>
  
  <h2 class="text-xl font-bold mb-4">2021</h2>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/alr.jpeg" />
    </div>
    <div>
      <p>
        Beswick D, Humphries S, Balkissoon C, Strand M, Miller J,  <strong>Khatiwada A</strong>, Vladar E, Lynch DA, Taylor-Cousar J.
        <a
           class="external-link"
           target="_blank"
           href="https://doi.org/10.1002/alr.22946">Olfactory Dysfunction in People with Cystic Fibrosis with at least One Copy of F508del</a>.
        <span class="italic">International Forum of Allergy & Rhinology. </span>
        2021 Dec 15. PMID: 34908251.
        </p>
      </div>
    </div>
  <div class="publication-item md:flex">
    <div class="image-wrapper">
      <img class="publication-image" src="/public/img/ki.JPG" />
    </div>
    <div>
      <p>
        Ayoub I, Wolf BJ, Geng L, Song H, <strong>Khatiwada A</strong>, Tsao BP, Oates JC, Rovin BH.
        <a
           class="external-link"
           target="_blank"
           href="https://doi.org/10.1016/j.kint.2021.11.014">Prediction Models of Treatment Response in Lupus Nephritis</a>.
        <span class="italic">Kidney Int. </span>
        2021 Dec 3:S0085-2538(21)01079-6. Epub ahead of print. PMID: 34871620.
        </p>
      </div>
    </div>
  
  <h2 class="text-xl font-bold mb-4">2020</h2>
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
  <h2 class="text-xl font-bold mb-4">2018</h2>
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
<h1 class="text-xl font-bold mb-4">Master's Thesis</h1>
<div>
  <div class="publication-item">
    <p>
      <strong>Khatiwada A</strong>. 
      <a
        class="external-link"
        target="_blank"
        href="https://dc.etsu.edu/etd/3090/.">Multilevel Models for Longitudinal Data</a>.
      <span class="italic">Electronic Theses and Dissertations.</span>
      2016; Paper 3090.
    </p>
    <p class="special-text">
        <InlineSVG
          src={star}
          class="h-6 w-6 flex-shrink-0 fill-current inline-block mr-1" />
        Downloaded over 2,100 times
    </p>
  </div>
</div>
<h1 class="text-xl font-bold mb-4">Manuscript under Review</h1>
<div>
 <div class="publication-item">
    <p>
      Richard MLL, Wirth JR,
      <strong>Khatiwada A</strong>, Chung D, Eudaly J, Gilkeson GS, Cunningham
      MA. Conditional knockout of ERα in CD11c+ cells, impact on survival and inflammatory cytokines in murine lupus. Submitted to
      <span class="italic">The Journal of Immunology.</span>
    </p>
  </div>
  <div class="publication-item">
    <p>
      Strand M, <strong>Khatiwada A</strong>, Baraghoshi D, Lynch D, Silverman E, Bhatt S, Austin E, Regan E, Boriek A, Crapo J. 
      Predicting COPD progression in current and former smokers using a joint model for FEV1 and FEV1/FVC. 
      Submitted to <span class="italic">Chronic Obstructive Pulmonary Diseases: Journal of the COPD Foundation.</span>
    </p>
  </div>
</div>
