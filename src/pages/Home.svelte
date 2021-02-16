<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<style>
  h2 {
    @apply text-xl font-bold mt-10 mb-2;
  }
</style>

<div class="block md:flex">
  <div class="md:w-1/3 pr-0 mb-4 md:mr-6">
    <img src="/public/img/ak.jpeg" class="" />
  </div>
  <div class="md:w-2/3">
    <h2 class="mt-0" style="margin-top: 0">About</h2>
    <div>
      <p>
        I am a PhD candidate in Biostatistics at the
        <a
          class="external-link"
          target="_blank"
          href="https://web.musc.edu">Medical University of South Carolina</a>,
        working under the supervision of
        <a
          class="external-link"
          target="_blank"
          href="http://people.musc.edu/~wolfb/">
          Dr. Bethany Wolf</a>
        and
        <a
          class="external-link"
          target="_blank"
          href="https://sites.google.com/site/statdchung/">Dr. Dongjun Chung.</a>
        I received a MS degree in Mathematics (statistics concentration) under
        the supervision of
        <a
          class="external-link"
          target="_blank"
          href="http://faculty.etsu.edu/seier/">
          Dr. Edith Seier</a>
        from
        <a
          class="external-link"
          target="_blank"
          href="https://www.etsu.edu/ehome/">ETSU</a>
        , and a BS degree in Math (actuarial science emphasis) and BA degree in
        Economics from
        <a
          class="external-link"
          target="_blank"
          href="https://www.mnstate.edu.">MSUM</a>.
      </p>
    </div>

    <h2 class="text-xl font-bold mb-4">Research Interest</h2>
    <div>
      <p class="mt-4">
        My research is focused on developing novel statistical approaches to
        integrate genetic data with genomic functional annotation data applied
        to complex autoimmune diseases (e.g., systemic lupus erythematosus,
        rheumatoid arthritis, ulcerative colitis, Crohn’s disease). More
        generally, the goal of my research is to improve statistical power to
        identify genetic variants associated with risk of complex diseases and
        facilitate understanding of underlying molecular mechanisms related to
        the disease-risk-associated genetic variants. I developed a statistical
        approach, called GPA-Tree, that combines a machine learning algorithm
        with the hierarchical modeling architecture for integrative analysis of
        genome wide association studies (GWAS) data and functional annotation
        information (e.g., gene expression, expression quantitative loci,
        epigenetic marks).
      </p>
      <p class="mt-4">
        Aside from independent research, I also enjoy multidisciplinary
        collaborations, and work with clinicians and translational science
        researchers. I usually work alongside my collaborators to develop
        research questions, design studies, perform statistical analysis,
        interpret results and co-author manuscripts.
      </p>
      <p class="mt-4">
        See my
        <a href="/cv" class="external-link" use:link>CV</a>
        for additional details.
      </p>
    </div>

    <h2 class="text-xl font-bold mb-4">Contact</h2>
    <div>
      <p>Aastha Khatiwada</p>
      <p>Department of Public Health Sciences</p>
      <p>135 Cannon Place, Suite 305, Charleston, SC 29425</p>
      <p>email: khatiwad at musc dot edu</p>
    </div>
  </div>
</div>
