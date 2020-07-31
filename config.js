const config = {
  "prefix": "!play",
  "cooldown": {
    "track": 10,
    "command": 2,
    "user": 10
  },
  "channel": "eskimon",
  "rights": {
    "mods": true,
    "vips": true,
    "user": false,
    "subs": true
  }
}

const tracks = [
  {
    "command": "2-3-poils-de-q.mp3",
    "file": "2-3-poils-de-q.mp3"
  },
  {
    "command": "ah-ah-mais-vous-etes-marteau-et-regardez-ca-ca-pisse-le-sang.mp3",
    "file": "ah-ah-mais-vous-etes-marteau-et-regardez-ca-ca-pisse-le-sang.mp3"
  },
  {
    "command": "ah-bah-alors-la-je-les-attends-les-mecs.mp3",
    "file": "ah-bah-alors-la-je-les-attends-les-mecs.mp3"
  },
  {
    "command": "ah-bah-cest-sur-on-se-marre.mp3",
    "file": "ah-bah-cest-sur-on-se-marre.mp3"
  },
  {
    "command": "ah-bah-ouais-mais-apres-il-faut-un-peu-de-technique.mp3",
    "file": "ah-bah-ouais-mais-apres-il-faut-un-peu-de-technique.mp3"
  },
  {
    "command": "ah-bah-voila-cherchez-pas-cest-hyper-flippant.mp3",
    "file": "ah-bah-voila-cherchez-pas-cest-hyper-flippant.mp3"
  },
  {
    "command": "ah-bravo-bah-vous-parlez-d-un-hero.mp3",
    "file": "ah-bravo-bah-vous-parlez-d-un-hero.mp3"
  },
  {
    "command": "ah-ca-quand-on-connait-pas-il-faut-se-mefier-avec-les-champignons.mp3",
    "file": "ah-ca-quand-on-connait-pas-il-faut-se-mefier-avec-les-champignons.mp3"
  },
  {
    "command": "ah-cest-ca.mp3",
    "file": "ah-cest-ca.mp3"
  },
  {
    "command": "ah-cest-regle-hein-je-confirme.mp3",
    "file": "ah-cest-regle-hein-je-confirme.mp3"
  },
  {
    "command": "ah--enfin-vous-voila-mon-ami--mais-que-se-passe-t-il-jentends-crier.mp3",
    "file": "ah--enfin-vous-voila-mon-ami--mais-que-se-passe-t-il-jentends-crier.mp3"
  },
  {
    "command": "ah-le-printemps-on-crame-des-mecs.mp3",
    "file": "ah-le-printemps-on-crame-des-mecs.mp3"
  },
  {
    "command": "ah-mais-arretez-de-gueuler-comme-un-con.mp3",
    "file": "ah-mais-arretez-de-gueuler-comme-un-con.mp3"
  },
  {
    "command": "ah-nan-mais-quand-on-est-pas-habitue-c-est-drolement-impressionnant-la-magie.mp3",
    "file": "ah-nan-mais-quand-on-est-pas-habitue-c-est-drolement-impressionnant-la-magie.mp3"
  },
  {
    "command": "ah-non-ca-c-est-que-nous.mp3",
    "file": "ah-non-ca-c-est-que-nous.mp3"
  },
  {
    "command": "ah-non-la-aujourd-hui-ca-passera-pas.mp3",
    "file": "ah-non-la-aujourd-hui-ca-passera-pas.mp3"
  },
  {
    "command": "ah-non-vous-allez-pas-bouder.mp3",
    "file": "ah-non-vous-allez-pas-bouder.mp3"
  },
  {
    "command": "ah-ouais-je-l-ai-fait-trop-fulgurant-la-ca-va.mp3",
    "file": "ah-ouais-je-l-ai-fait-trop-fulgurant-la-ca-va.mp3"
  },
  {
    "command": "ah-ouais-vous-madressez-carrement-plus-la-parole-en-fait.mp3",
    "file": "ah-ouais-vous-madressez-carrement-plus-la-parole-en-fait.mp3"
  },
  {
    "command": "ah-ouais-vous-seriez-une-sorte-de-bi-taupe-en-fait.mp3",
    "file": "ah-ouais-vous-seriez-une-sorte-de-bi-taupe-en-fait.mp3"
  },
  {
    "command": "ah-oui-bravo-une-belle-lecon-de-sport.mp3",
    "file": "ah-oui-bravo-une-belle-lecon-de-sport.mp3"
  },
  {
    "command": "ah-parce-que-c-est-la-seule-alternative-que-vous-me-proposez.mp3",
    "file": "ah-parce-que-c-est-la-seule-alternative-que-vous-me-proposez.mp3"
  },
  {
    "command": "ah-putain-ouais-en-fait-vous-mavez-fait-lever-pour-rien.mp3",
    "file": "ah-putain-ouais-en-fait-vous-mavez-fait-lever-pour-rien.mp3"
  },
  {
    "command": "ah-qu-est-ce-que-vous-voulez-mon-petit-bohort.mp3",
    "file": "ah-qu-est-ce-que-vous-voulez-mon-petit-bohort.mp3"
  },
  {
    "command": "ah-si-moi-j-irai-me-recoucher-avant-de-prendre-un-pain.mp3",
    "file": "ah-si-moi-j-irai-me-recoucher-avant-de-prendre-un-pain.mp3"
  },
  {
    "command": "ah-une-vache-pres-cest-pas-une-science-exacte.mp3",
    "file": "ah-une-vache-pres-cest-pas-une-science-exacte.mp3"
  },
  {
    "command": "a-kadoc.mp3",
    "file": "a-kadoc.mp3"
  },
  {
    "command": "a-la-volette1.mp3",
    "file": "a-la-volette1.mp3"
  },
  {
    "command": "allez-boire-un-coup.mp3",
    "file": "allez-boire-un-coup.mp3"
  },
  {
    "command": "allez-bon-dieu-mais-magnez-vous-ca-pue-la-dedans.mp3",
    "file": "allez-bon-dieu-mais-magnez-vous-ca-pue-la-dedans.mp3"
  },
  {
    "command": "allez-en-garde-espece-de-petite-couille-molle.mp3",
    "file": "allez-en-garde-espece-de-petite-couille-molle.mp3"
  },
  {
    "command": "allez-quoi-on-a-besoin-dune-potion.mp3",
    "file": "allez-quoi-on-a-besoin-dune-potion.mp3"
  },
  {
    "command": "allez-vous-preparer-mousaillon-on-largue-les-amarres-dans-une-heure.mp3",
    "file": "allez-vous-preparer-mousaillon-on-largue-les-amarres-dans-une-heure.mp3"
  },
  {
    "command": "allez-vous-reposer-vous-l-avez-bien-merite.mp3",
    "file": "allez-vous-reposer-vous-l-avez-bien-merite.mp3"
  },
  {
    "command": "allez-y-vous.mp3",
    "file": "allez-y-vous.mp3"
  },
  {
    "command": "alors--a-qui-cest-quelle-est-morte-la-va-vache.mp3",
    "file": "alors--a-qui-cest-quelle-est-morte-la-va-vache.mp3"
  },
  {
    "command": "alors-ca-vient-ptite-bite.mp3",
    "file": "alors-ca-vient-ptite-bite.mp3"
  },
  {
    "command": "alors-des-qu-il-s-agit-d-aller-se-dorer-les-miches-en-armorique.mp3",
    "file": "alors-des-qu-il-s-agit-d-aller-se-dorer-les-miches-en-armorique.mp3"
  },
  {
    "command": "alors-le-ratichon-on-a-un-ptit-creux.mp3",
    "file": "alors-le-ratichon-on-a-un-ptit-creux.mp3"
  },
  {
    "command": "alors-moi-jai-un-petit-probleme--jai-pas-pige-un-broc-de-ce-que-vous-bavez.mp3",
    "file": "alors-moi-jai-un-petit-probleme--jai-pas-pige-un-broc-de-ce-que-vous-bavez.mp3"
  },
  {
    "command": "alors-oisif-obese-autant-dire-des-gros-cons.mp3",
    "file": "alors-oisif-obese-autant-dire-des-gros-cons.mp3"
  },
  {
    "command": "alors-si-j-ai-bien-resume-le-truc-vous-allez-creuser-trois-pieds-et-demi-sur-toute-la-bretagne.mp3",
    "file": "alors-si-j-ai-bien-resume-le-truc-vous-allez-creuser-trois-pieds-et-demi-sur-toute-la-bretagne.mp3"
  },
  {
    "command": "a-moi-a-lassassin.mp3",
    "file": "a-moi-a-lassassin.mp3"
  },
  {
    "command": "a-moi.mp3",
    "file": "a-moi.mp3"
  },
  {
    "command": "a-mon-epoque-ca-se-faisait-pas.mp3",
    "file": "a-mon-epoque-ca-se-faisait-pas.mp3"
  },
  {
    "command": "animaux-de-la-foret.mp3",
    "file": "animaux-de-la-foret.mp3"
  },
  {
    "command": "a-plus-tard.mp3",
    "file": "a-plus-tard.mp3"
  },
  {
    "command": "apres-pour-le-detail-je-sais-pas.mp3",
    "file": "apres-pour-le-detail-je-sais-pas.mp3"
  },
  {
    "command": "a-roulettes.mp3",
    "file": "a-roulettes.mp3"
  },
  {
    "command": "arretez-cest-pour-deconner.mp3",
    "file": "arretez-cest-pour-deconner.mp3"
  },
  {
    "command": "arretez-de-parler-aux-gens.mp3",
    "file": "arretez-de-parler-aux-gens.mp3"
  },
  {
    "command": "arretez-immediatement-de-me-prendre-pour-une-truite.mp3",
    "file": "arretez-immediatement-de-me-prendre-pour-une-truite.mp3"
  },
  {
    "command": "arthour.mp3",
    "file": "arthour.mp3"
  },
  {
    "command": "assiette-fromage.mp3",
    "file": "assiette-fromage.mp3"
  },
  {
    "command": "a-titre-purement-informatif.mp3",
    "file": "a-titre-purement-informatif.mp3"
  },
  {
    "command": "attendez-il-faut-que-ca-soit-vrai-tout-ce-qu-on-dit-la.mp3",
    "file": "attendez-il-faut-que-ca-soit-vrai-tout-ce-qu-on-dit-la.mp3"
  },
  {
    "command": "attendez-que-je-me-suis-jamais-quoi.mp3",
    "file": "attendez-que-je-me-suis-jamais-quoi.mp3"
  },
  {
    "command": "attention-attention-a-un-moment-il-y-a-des-granges-qui-vont-se-mettre-a-flamber-il-faudra-pas-demander-d-ou-sa-vient.mp3",
    "file": "attention-attention-a-un-moment-il-y-a-des-granges-qui-vont-se-mettre-a-flamber-il-faudra-pas-demander-d-ou-sa-vient.mp3"
  },
  {
    "command": "au-bout-dun-moment-on-a-prefere-plus-rien-dire.mp3",
    "file": "au-bout-dun-moment-on-a-prefere-plus-rien-dire.mp3"
  },
  {
    "command": "au-bucher-demon-expie-tes-fautes.mp3",
    "file": "au-bucher-demon-expie-tes-fautes.mp3"
  },
  {
    "command": "au-gros-sel-qu-est-ce-que-c-est-ces-conneries-vous-me-prenez-pour-une-epaule-d-agneau.mp3",
    "file": "au-gros-sel-qu-est-ce-que-c-est-ces-conneries-vous-me-prenez-pour-une-epaule-d-agneau.mp3"
  },
  {
    "command": "ave-cesar.mp3",
    "file": "ave-cesar.mp3"
  },
  {
    "command": "avec-sa-couille.mp3",
    "file": "avec-sa-couille.mp3"
  },
  {
    "command": "avez-de-la-chance.mp3",
    "file": "avez-de-la-chance.mp3"
  },
  {
    "command": "a-voui-vous-avez-raison.mp3",
    "file": "a-voui-vous-avez-raison.mp3"
  },
  {
    "command": "bah-alors-884-charrettes-de-bouses.mp3",
    "file": "bah-alors-884-charrettes-de-bouses.mp3"
  },
  {
    "command": "bah-ca-depend-a-partir-de-quand.mp3",
    "file": "bah-ca-depend-a-partir-de-quand.mp3"
  },
  {
    "command": "bah-je-sais-pas-me-lacher-la-grappe-par-exemple.mp3",
    "file": "bah-je-sais-pas-me-lacher-la-grappe-par-exemple.mp3"
  },
  {
    "command": "bah-on-a-pas-de-technique-mais-cest-comme-tout.mp3",
    "file": "bah-on-a-pas-de-technique-mais-cest-comme-tout.mp3"
  },
  {
    "command": "bah-si-il-n-y-avait-que-les-oiseaux-elle-est-a-moitie-givree-de-toute-facon-on-ne-peut-pas-tout-relever-non-plus.mp3",
    "file": "bah-si-il-n-y-avait-que-les-oiseaux-elle-est-a-moitie-givree-de-toute-facon-on-ne-peut-pas-tout-relever-non-plus.mp3"
  },
  {
    "command": "bataille-de-fions.mp3",
    "file": "bataille-de-fions.mp3"
  },
  {
    "command": "bateau-nage.mp3",
    "file": "bateau-nage.mp3"
  },
  {
    "command": "ben-nous-on-a-cru-que-cetait-la-pour-faire-joli.mp3",
    "file": "ben-nous-on-a-cru-que-cetait-la-pour-faire-joli.mp3"
  },
  {
    "command": "ben-oui-cest-une-rime-triple--blanche-et-seche-poitrine-et-prairie-de-notre-enfance.mp3",
    "file": "ben-oui-cest-une-rime-triple--blanche-et-seche-poitrine-et-prairie-de-notre-enfance.mp3"
  },
  {
    "command": "bibelots-mongol-parthenon.mp3",
    "file": "bibelots-mongol-parthenon.mp3"
  },
  {
    "command": "bien-manger-cest-important.mp3",
    "file": "bien-manger-cest-important.mp3"
  },
  {
    "command": "biensur-ils-ont-que-ca-a-foutre-les-paysans.mp3",
    "file": "biensur-ils-ont-que-ca-a-foutre-les-paysans.mp3"
  },
  {
    "command": "blaireau-peignecul-tarlouze.mp3",
    "file": "blaireau-peignecul-tarlouze.mp3"
  },
  {
    "command": "bled-natal-fion.mp3",
    "file": "bled-natal-fion.mp3"
  },
  {
    "command": "bohort-arreter-de-vous-vexer-sans-arret-comme-une-grosse-dinde.mp3",
    "file": "bohort-arreter-de-vous-vexer-sans-arret-comme-une-grosse-dinde.mp3"
  },
  {
    "command": "bon-alors-combien-il-faut-que-casque-pour-la-fete-aux-pecores.mp3",
    "file": "bon-alors-combien-il-faut-que-casque-pour-la-fete-aux-pecores.mp3"
  },
  {
    "command": "bon-bah-aller-on-demarre-et-ouvrez-les-echauguettes.mp3",
    "file": "bon-bah-aller-on-demarre-et-ouvrez-les-echauguettes.mp3"
  },
  {
    "command": "bon-bah-ca-va-on-plaisante.mp3",
    "file": "bon-bah-ca-va-on-plaisante.mp3"
  },
  {
    "command": "bon-bah-je-vais-voir-ce-que-je-peux-faire.mp3",
    "file": "bon-bah-je-vais-voir-ce-que-je-peux-faire.mp3"
  },
  {
    "command": "bon-ben-revolte.mp3",
    "file": "bon-ben-revolte.mp3"
  },
  {
    "command": "bon-cassez-vous.mp3",
    "file": "bon-cassez-vous.mp3"
  },
  {
    "command": "bon-de-toute-facon.mp3",
    "file": "bon-de-toute-facon.mp3"
  },
  {
    "command": "bon-je-la-suis-parce-que-je-suis-tres-amoureux.mp3",
    "file": "bon-je-la-suis-parce-que-je-suis-tres-amoureux.mp3"
  },
  {
    "command": "bon-je-peux-pas-penser-a-tout-la.mp3",
    "file": "bon-je-peux-pas-penser-a-tout-la.mp3"
  },
  {
    "command": "bonjour-la-pedagogie.mp3",
    "file": "bonjour-la-pedagogie.mp3"
  },
  {
    "command": "boule-de-feu-boule-de-feu.mp3",
    "file": "boule-de-feu-boule-de-feu.mp3"
  },
  {
    "command": "bucher1.mp3",
    "file": "bucher1.mp3"
  },
  {
    "command": "bucher2.mp3",
    "file": "bucher2.mp3"
  },
  {
    "command": "bucher3.mp3",
    "file": "bucher3.mp3"
  },
  {
    "command": "buffet-a-vaisselle.mp3",
    "file": "buffet-a-vaisselle.mp3"
  },
  {
    "command": "burgonde-ou-anglais.mp3",
    "file": "burgonde-ou-anglais.mp3"
  },
  {
    "command": "ca-ca-doit-etre-du-code-parce-que-ca-veut-rien-dire.mp3",
    "file": "ca-ca-doit-etre-du-code-parce-que-ca-veut-rien-dire.mp3"
  },
  {
    "command": "ca-change-tout.mp3",
    "file": "ca-change-tout.mp3"
  },
  {
    "command": "ca-me-fait-gerber.mp3",
    "file": "ca-me-fait-gerber.mp3"
  },
  {
    "command": "ca-me-ferait-mal.mp3",
    "file": "ca-me-ferait-mal.mp3"
  },
  {
    "command": "ca-me-plait-qu-a-moitie.mp3",
    "file": "ca-me-plait-qu-a-moitie.mp3"
  },
  {
    "command": "ca-ne-plaisante-plus.mp3",
    "file": "ca-ne-plaisante-plus.mp3"
  },
  {
    "command": "casuffit.mp3",
    "file": "casuffit.mp3"
  },
  {
    "command": "catastrophe.mp3",
    "file": "catastrophe.mp3"
  },
  {
    "command": "ca-va-encore-faire-des-discussions-a-rallonge.mp3",
    "file": "ca-va-encore-faire-des-discussions-a-rallonge.mp3"
  },
  {
    "command": "ca-va-oui-ca-va-vous-etes-content.mp3",
    "file": "ca-va-oui-ca-va-vous-etes-content.mp3"
  },
  {
    "command": "ca-va-si-faut-sonner-lalerte-vous-pouvez-bien-attendre-que-je-revienne-nan.mp3",
    "file": "ca-va-si-faut-sonner-lalerte-vous-pouvez-bien-attendre-que-je-revienne-nan.mp3"
  },
  {
    "command": "ca-va-un-peu-trop-vite-pour-moi.mp3",
    "file": "ca-va-un-peu-trop-vite-pour-moi.mp3"
  },
  {
    "command": "ca-vous-ennuie-si-je-vomis.mp3",
    "file": "ca-vous-ennuie-si-je-vomis.mp3"
  },
  {
    "command": "ca-vous-fait-pas-mal-a-la-tete-de-glandouiller.mp3",
    "file": "ca-vous-fait-pas-mal-a-la-tete-de-glandouiller.mp3"
  },
  {
    "command": "ca-vous-regarde-pas-cest-secret-ok.mp3",
    "file": "ca-vous-regarde-pas-cest-secret-ok.mp3"
  },
  {
    "command": "centurion-caius-camilus-lulululu.mp3",
    "file": "centurion-caius-camilus-lulululu.mp3"
  },
  {
    "command": "ce-serait-hyper.mp3",
    "file": "ce-serait-hyper.mp3"
  },
  {
    "command": "cest-beau-quand-meme.mp3",
    "file": "cest-beau-quand-meme.mp3"
  },
  {
    "command": "cest-bien-fait.mp3",
    "file": "cest-bien-fait.mp3"
  },
  {
    "command": "cest-bien-quon-reste-un-peu-dehors.mp3",
    "file": "cest-bien-quon-reste-un-peu-dehors.mp3"
  },
  {
    "command": "cest-chaud-quand-meme.mp3",
    "file": "cest-chaud-quand-meme.mp3"
  },
  {
    "command": "c-est-cotelette-que-vous-comprenez-pas.mp3",
    "file": "c-est-cotelette-que-vous-comprenez-pas.mp3"
  },
  {
    "command": "cest-debile-cette-histoire.mp3",
    "file": "cest-debile-cette-histoire.mp3"
  },
  {
    "command": "cest-de-la-daube.mp3",
    "file": "cest-de-la-daube.mp3"
  },
  {
    "command": "cest-de-la-merde-merci-messieurs.mp3",
    "file": "cest-de-la-merde-merci-messieurs.mp3"
  },
  {
    "command": "cest-de-la-merde.mp3",
    "file": "cest-de-la-merde.mp3"
  },
  {
    "command": "cest-dur.mp3",
    "file": "cest-dur.mp3"
  },
  {
    "command": "cest-facile-on-peut-jouer-soit-avec-des-haricots-soit-avec-des-lentilles.mp3",
    "file": "cest-facile-on-peut-jouer-soit-avec-des-haricots-soit-avec-des-lentilles.mp3"
  },
  {
    "command": "cest-honteux.mp3",
    "file": "cest-honteux.mp3"
  },
  {
    "command": "cest-interessant.mp3",
    "file": "cest-interessant.mp3"
  },
  {
    "command": "cest-lanniversaire-dans-tous-les-recoins.mp3",
    "file": "cest-lanniversaire-dans-tous-les-recoins.mp3"
  },
  {
    "command": "cest-l-autre-con-avec-ses-pinceaux.mp3",
    "file": "cest-l-autre-con-avec-ses-pinceaux.mp3"
  },
  {
    "command": "cest-le-genre-dendroit-ou-il-faut-parler-fort.mp3",
    "file": "cest-le-genre-dendroit-ou-il-faut-parler-fort.mp3"
  },
  {
    "command": "cest-le-rendez-vous-des-glandus-la-ou-quoi.mp3",
    "file": "cest-le-rendez-vous-des-glandus-la-ou-quoi.mp3"
  },
  {
    "command": "c-est-les-autres-qui-sont-cons.mp3",
    "file": "c-est-les-autres-qui-sont-cons.mp3"
  },
  {
    "command": "c-est-maintenant-quil-faut-se-secouer.mp3",
    "file": "c-est-maintenant-quil-faut-se-secouer.mp3"
  },
  {
    "command": "cest-marrant-les-petits-bouts-de-fromage-par-terre.mp3",
    "file": "cest-marrant-les-petits-bouts-de-fromage-par-terre.mp3"
  },
  {
    "command": "cest-moi-ou-il-y-a-une-ambiance-de-merde.mp3",
    "file": "cest-moi-ou-il-y-a-une-ambiance-de-merde.mp3"
  },
  {
    "command": "cest-pas-des-fleches.mp3",
    "file": "cest-pas-des-fleches.mp3"
  },
  {
    "command": "cest-pas-du-burgonde-ca.mp3",
    "file": "cest-pas-du-burgonde-ca.mp3"
  },
  {
    "command": "cest-pas-du-tout-mon-anniversaire.mp3",
    "file": "cest-pas-du-tout-mon-anniversaire.mp3"
  },
  {
    "command": "cest-pas-faux1.mp3",
    "file": "cest-pas-faux1.mp3"
  },
  {
    "command": "cest-pas-faux2.mp3",
    "file": "cest-pas-faux2.mp3"
  },
  {
    "command": "cest-pas-jo-le-rigolo.mp3",
    "file": "cest-pas-jo-le-rigolo.mp3"
  },
  {
    "command": "c-est-pas-parce-qu-ils-ont-trahi-que-c-est-plus-des-allies.mp3",
    "file": "c-est-pas-parce-qu-ils-ont-trahi-que-c-est-plus-des-allies.mp3"
  },
  {
    "command": "cest-pas-une-sinecure.mp3",
    "file": "cest-pas-une-sinecure.mp3"
  },
  {
    "command": "cest-personne-un-connard.mp3",
    "file": "cest-personne-un-connard.mp3"
  },
  {
    "command": "cest-plus-filiforme.mp3",
    "file": "cest-plus-filiforme.mp3"
  },
  {
    "command": "cest-pour-voir-si-vous-avez-un-don.mp3",
    "file": "cest-pour-voir-si-vous-avez-un-don.mp3"
  },
  {
    "command": "cest-prodigieux.mp3",
    "file": "cest-prodigieux.mp3"
  },
  {
    "command": "cest-que-cest-pas-une-blague.mp3",
    "file": "cest-que-cest-pas-une-blague.mp3"
  },
  {
    "command": "cest-qui-tout-ces-cons.mp3",
    "file": "cest-qui-tout-ces-cons.mp3"
  },
  {
    "command": "cest-tellement-facile-que-je-vais-peut-etre-systematise-le-processus.mp3",
    "file": "cest-tellement-facile-que-je-vais-peut-etre-systematise-le-processus.mp3"
  },
  {
    "command": "cest-toujours-un-peu-delicat-de-parler-damour-aux-cons.mp3",
    "file": "cest-toujours-un-peu-delicat-de-parler-damour-aux-cons.mp3"
  },
  {
    "command": "cest-une-blague.mp3",
    "file": "cest-une-blague.mp3"
  },
  {
    "command": "cest-une-catastrophe-souffle.mp3",
    "file": "cest-une-catastrophe-souffle.mp3"
  },
  {
    "command": "cest-un-scandale.mp3",
    "file": "cest-un-scandale.mp3"
  },
  {
    "command": "cest-vrai-quelle-reste.mp3",
    "file": "cest-vrai-quelle-reste.mp3"
  },
  {
    "command": "chaque-fois-que-je-vais-a-un-balloche-je-picole-je-discute.mp3",
    "file": "chaque-fois-que-je-vais-a-un-balloche-je-picole-je-discute.mp3"
  },
  {
    "command": "charmant.mp3",
    "file": "charmant.mp3"
  },
  {
    "command": "chevalierisation.mp3",
    "file": "chevalierisation.mp3"
  },
  {
    "command": "chui-un-marteau-moi.mp3",
    "file": "chui-un-marteau-moi.mp3"
  },
  {
    "command": "comme-la-mare-aux-canards.mp3",
    "file": "comme-la-mare-aux-canards.mp3"
  },
  {
    "command": "commencez-pas-a-me-faire-chier.mp3",
    "file": "commencez-pas-a-me-faire-chier.mp3"
  },
  {
    "command": "comment-ca-on-bute-karadoc.mp3",
    "file": "comment-ca-on-bute-karadoc.mp3"
  },
  {
    "command": "comment.mp3",
    "file": "comment.mp3"
  },
  {
    "command": "comment-peut-on-arriver-a-un-grade-aussi-eleve.mp3",
    "file": "comment-peut-on-arriver-a-un-grade-aussi-eleve.mp3"
  },
  {
    "command": "compote.mp3",
    "file": "compote.mp3"
  },
  {
    "command": "considerer-que-je-suis-officiellement-cul-nu.mp3",
    "file": "considerer-que-je-suis-officiellement-cul-nu.mp3"
  },
  {
    "command": "coup-de-beche.mp3",
    "file": "coup-de-beche.mp3"
  },
  {
    "command": "coup-de-pied-aux-poules.mp3",
    "file": "coup-de-pied-aux-poules.mp3"
  },
  {
    "command": "crame-ta-famille.mp3",
    "file": "crame-ta-famille.mp3"
  },
  {
    "command": "cuillere-2.mp3",
    "file": "cuillere-2.mp3"
  },
  {
    "command": "cuillere.mp3",
    "file": "cuillere.mp3"
  },
  {
    "command": "cuit-les-boules.mp3",
    "file": "cuit-les-boules.mp3"
  },
  {
    "command": "dans-la-vie.mp3",
    "file": "dans-la-vie.mp3"
  },
  {
    "command": "dans-trois-jours-cest-les-vacances.mp3",
    "file": "dans-trois-jours-cest-les-vacances.mp3"
  },
  {
    "command": "dans-trois-jours-ma-tata-elle-menmene-a-la-mer-pour-me-noyer.mp3",
    "file": "dans-trois-jours-ma-tata-elle-menmene-a-la-mer-pour-me-noyer.mp3"
  },
  {
    "command": "decarre-tes-troupes-de-chez-moi-ou-je-crame-ton-pays.mp3",
    "file": "decarre-tes-troupes-de-chez-moi-ou-je-crame-ton-pays.mp3"
  },
  {
    "command": "degaine-crevette-merou.mp3",
    "file": "degaine-crevette-merou.mp3"
  },
  {
    "command": "demain-cest-demain.mp3",
    "file": "demain-cest-demain.mp3"
  },
  {
    "command": "demi-journee-vous-attend.mp3",
    "file": "demi-journee-vous-attend.mp3"
  },
  {
    "command": "de-quoi-desole-excusez-moi-j-ecoutais-pas.mp3",
    "file": "de-quoi-desole-excusez-moi-j-ecoutais-pas.mp3"
  },
  {
    "command": "des-betes-sauvages-que-je-vais-recuperer.mp3",
    "file": "des-betes-sauvages-que-je-vais-recuperer.mp3"
  },
  {
    "command": "des-pedales-ils-disent-sur-le-message.mp3",
    "file": "des-pedales-ils-disent-sur-le-message.mp3"
  },
  {
    "command": "des-vetements.mp3",
    "file": "des-vetements.mp3"
  },
  {
    "command": "de-toute-facon-les-reunions-cest-2-fois-par-mois.mp3",
    "file": "de-toute-facon-les-reunions-cest-2-fois-par-mois.mp3"
  },
  {
    "command": "de-tout-facon-on-dit-le-nord-selon-comment-on-est-tourne-ca-change-tout.mp3",
    "file": "de-tout-facon-on-dit-le-nord-selon-comment-on-est-tourne-ca-change-tout.mp3"
  },
  {
    "command": "deux-trous-du-cul-soient-plus-efficaces-qu-un-seul.mp3",
    "file": "deux-trous-du-cul-soient-plus-efficaces-qu-un-seul.mp3"
  },
  {
    "command": "difference-concrete-avec-des-briques.mp3",
    "file": "difference-concrete-avec-des-briques.mp3"
  },
  {
    "command": "dis-donc-machine-si-tu-allais-voir-a-la-table-du-fond-si-on-y-ait.mp3",
    "file": "dis-donc-machine-si-tu-allais-voir-a-la-table-du-fond-si-on-y-ait.mp3"
  },
  {
    "command": "dites-tirez-vous.mp3",
    "file": "dites-tirez-vous.mp3"
  },
  {
    "command": "dites-tout-de-suite-que-j-ai-des-idees-de-tocard.mp3",
    "file": "dites-tout-de-suite-que-j-ai-des-idees-de-tocard.mp3"
  },
  {
    "command": "donc-cette-fiole.mp3",
    "file": "donc-cette-fiole.mp3"
  },
  {
    "command": "donc-vous-allez-faire-une-troupe-delite-avec-vos-cousins-debiles.mp3",
    "file": "donc-vous-allez-faire-une-troupe-delite-avec-vos-cousins-debiles.mp3"
  },
  {
    "command": "ebaubir.mp3",
    "file": "ebaubir.mp3"
  },
  {
    "command": "ecartez-vous.mp3",
    "file": "ecartez-vous.mp3"
  },
  {
    "command": "ecoutez-je-comprend-rien-a-ce-que-vous-faites.mp3",
    "file": "ecoutez-je-comprend-rien-a-ce-que-vous-faites.mp3"
  },
  {
    "command": "elle-avait-choppe-toutes-les-maladies.mp3",
    "file": "elle-avait-choppe-toutes-les-maladies.mp3"
  },
  {
    "command": "elle-avait-rien-a-y-foutre-deja-pour-commencer.mp3",
    "file": "elle-avait-rien-a-y-foutre-deja-pour-commencer.mp3"
  },
  {
    "command": "elle-est-ou-la-poulette.mp3",
    "file": "elle-est-ou-la-poulette.mp3"
  },
  {
    "command": "elle-me-fixe-avec-ses-yeux-de-serpent.mp3",
    "file": "elle-me-fixe-avec-ses-yeux-de-serpent.mp3"
  },
  {
    "command": "elle-vomit.mp3",
    "file": "elle-vomit.mp3"
  },
  {
    "command": "embobinage-dans-l-air.mp3",
    "file": "embobinage-dans-l-air.mp3"
  },
  {
    "command": "en-fait-jetais-dans-un-paturage.mp3",
    "file": "en-fait-jetais-dans-un-paturage.mp3"
  },
  {
    "command": "enfin-quand-cest-demande-gentiment.mp3",
    "file": "enfin-quand-cest-demande-gentiment.mp3"
  },
  {
    "command": "en-garde-espece-de-vieille-pute-degarnie.mp3",
    "file": "en-garde-espece-de-vieille-pute-degarnie.mp3"
  },
  {
    "command": "en-garde-ma-mignone.mp3",
    "file": "en-garde-ma-mignone.mp3"
  },
  {
    "command": "enquille.mp3",
    "file": "enquille.mp3"
  },
  {
    "command": "entre-le-roi-arthur-quest-pas-capable-de-denicher-son-graal.mp3",
    "file": "entre-le-roi-arthur-quest-pas-capable-de-denicher-son-graal.mp3"
  },
  {
    "command": "epique.mp3",
    "file": "epique.mp3"
  },
  {
    "command": "essayez-de-faire-des-phrases-pour-vous-deja.mp3",
    "file": "essayez-de-faire-des-phrases-pour-vous-deja.mp3"
  },
  {
    "command": "est-ce-que-peut-servir-elan-pigeon.mp3",
    "file": "est-ce-que-peut-servir-elan-pigeon.mp3"
  },
  {
    "command": "est-ce-que-vous-allez-finir-par-fermer-vos-gueules.mp3",
    "file": "est-ce-que-vous-allez-finir-par-fermer-vos-gueules.mp3"
  },
  {
    "command": "est-ce-que-vous-pouvez-vous-barrer-maintenant.mp3",
    "file": "est-ce-que-vous-pouvez-vous-barrer-maintenant.mp3"
  },
  {
    "command": "est-ce-quil-sait-nager-deja.mp3",
    "file": "est-ce-quil-sait-nager-deja.mp3"
  },
  {
    "command": "et-alors-faut-un-permis.mp3",
    "file": "et-alors-faut-un-permis.mp3"
  },
  {
    "command": "et-a-un-moment-le-sorcier-s-est-mis-a-nous-menacer-avec-ses-parties-genitales.mp3",
    "file": "et-a-un-moment-le-sorcier-s-est-mis-a-nous-menacer-avec-ses-parties-genitales.mp3"
  },
  {
    "command": "et-bah-tu-peux-te-la-garder.mp3",
    "file": "et-bah-tu-peux-te-la-garder.mp3"
  },
  {
    "command": "et-ca-cest-du-nougat.mp3",
    "file": "et-ca-cest-du-nougat.mp3"
  },
  {
    "command": "et-celle-la-jirai-pas-me-coucher-avant-de-lavoir-bousillee.mp3",
    "file": "et-celle-la-jirai-pas-me-coucher-avant-de-lavoir-bousillee.mp3"
  },
  {
    "command": "et-cest-de-la-merde.mp3",
    "file": "et-cest-de-la-merde.mp3"
  },
  {
    "command": "et-moi-je-me-suis-fait-derober-de-lalimentation-tout-le-long-du-voyage.mp3",
    "file": "et-moi-je-me-suis-fait-derober-de-lalimentation-tout-le-long-du-voyage.mp3"
  },
  {
    "command": "et-oui-meme-t-es-bien-mouchee.mp3",
    "file": "et-oui-meme-t-es-bien-mouchee.mp3"
  },
  {
    "command": "et-puis-alors-mon-petit-pote-si-vous-en-tenez-une-qui-veux-se-marier-avec-vous.mp3",
    "file": "et-puis-alors-mon-petit-pote-si-vous-en-tenez-une-qui-veux-se-marier-avec-vous.mp3"
  },
  {
    "command": "et-puis-quoi-encore.mp3",
    "file": "et-puis-quoi-encore.mp3"
  },
  {
    "command": "et-puis-y-a-toujours-une-proportion-de-secoues.mp3",
    "file": "et-puis-y-a-toujours-une-proportion-de-secoues.mp3"
  },
  {
    "command": "et-si-vous-arretiez-de-gueuler.mp3",
    "file": "et-si-vous-arretiez-de-gueuler.mp3"
  },
  {
    "command": "et-vous-bande-de-cons.mp3",
    "file": "et-vous-bande-de-cons.mp3"
  },
  {
    "command": "euh-si-il-lache-une-caisse-ca-le-fait-ou-pas.mp3",
    "file": "euh-si-il-lache-une-caisse-ca-le-fait-ou-pas.mp3"
  },
  {
    "command": "evidemment-quelquun.mp3",
    "file": "evidemment-quelquun.mp3"
  },
  {
    "command": "evitez-de-mappeler-maman.mp3",
    "file": "evitez-de-mappeler-maman.mp3"
  },
  {
    "command": "exagerer-non.mp3",
    "file": "exagerer-non.mp3"
  },
  {
    "command": "excusez-moi-hein-je-ne-connais-pas-encore-bien-vos-noms.mp3",
    "file": "excusez-moi-hein-je-ne-connais-pas-encore-bien-vos-noms.mp3"
  },
  {
    "command": "fagot-fagot-fagot.mp3",
    "file": "fagot-fagot-fagot.mp3"
  },
  {
    "command": "faisons-table-en-marbre.mp3",
    "file": "faisons-table-en-marbre.mp3"
  },
  {
    "command": "faites-gaffe-aux-pieges-a-loups.mp3",
    "file": "faites-gaffe-aux-pieges-a-loups.mp3"
  },
  {
    "command": "faites-pas-le-con-sire-ouvrez.mp3",
    "file": "faites-pas-le-con-sire-ouvrez.mp3"
  },
  {
    "command": "faut-ce-qui-faut.mp3",
    "file": "faut-ce-qui-faut.mp3"
  },
  {
    "command": "faut-que-je-retourne-a-la-ferme-de-mes-vieux.mp3",
    "file": "faut-que-je-retourne-a-la-ferme-de-mes-vieux.mp3"
  },
  {
    "command": "faut-que-vous-arretiez.mp3",
    "file": "faut-que-vous-arretiez.mp3"
  },
  {
    "command": "faut-y-aller-a-la-zob.mp3",
    "file": "faut-y-aller-a-la-zob.mp3"
  },
  {
    "command": "federer-mes-couilles.mp3",
    "file": "federer-mes-couilles.mp3"
  },
  {
    "command": "fer-a-cheval.mp3",
    "file": "fer-a-cheval.mp3"
  },
  {
    "command": "ferme-ta-gueule.mp3",
    "file": "ferme-ta-gueule.mp3"
  },
  {
    "command": "fier-je-vais-l-envoyer-trois-mois-a-poil-dans-la-foret.mp3",
    "file": "fier-je-vais-l-envoyer-trois-mois-a-poil-dans-la-foret.mp3"
  },
  {
    "command": "fils-d-unijambiste.mp3",
    "file": "fils-d-unijambiste.mp3"
  },
  {
    "command": "fiotte-tatie.mp3",
    "file": "fiotte-tatie.mp3"
  },
  {
    "command": "fleur-en-bouquet.mp3",
    "file": "fleur-en-bouquet.mp3"
  },
  {
    "command": "fort-en-pomme-1.mp3",
    "file": "fort-en-pomme-1.mp3"
  },
  {
    "command": "fort-en-pomme-2.mp3",
    "file": "fort-en-pomme-2.mp3"
  },
  {
    "command": "fournis-notice.mp3",
    "file": "fournis-notice.mp3"
  },
  {
    "command": "franchement-une-potion-pour-faire-pisser-bleu.mp3",
    "file": "franchement-une-potion-pour-faire-pisser-bleu.mp3"
  },
  {
    "command": "gerber-mourir.mp3",
    "file": "gerber-mourir.mp3"
  },
  {
    "command": "gigoter-des-miches-ca-donne-faim.mp3",
    "file": "gigoter-des-miches-ca-donne-faim.mp3"
  },
  {
    "command": "gras-du-cul.mp3",
    "file": "gras-du-cul.mp3"
  },
  {
    "command": "gras-sur-le-cul.mp3",
    "file": "gras-sur-le-cul.mp3"
  },
  {
    "command": "ha-cest-ça.mp3",
    "file": "ha-cest-ça.mp3"
  },
  {
    "command": "hein-titi.mp3",
    "file": "hein-titi.mp3"
  },
  {
    "command": "he-les-connards-vous-pouvez-faire-griller-un-porcelet.mp3",
    "file": "he-les-connards-vous-pouvez-faire-griller-un-porcelet.mp3"
  },
  {
    "command": "heu-cest-plutot-des-cons.mp3",
    "file": "heu-cest-plutot-des-cons.mp3"
  },
  {
    "command": "homme-sans-metier.mp3",
    "file": "homme-sans-metier.mp3"
  },
  {
    "command": "honnetement-je-connais-pas-le-mot-la.mp3",
    "file": "honnetement-je-connais-pas-le-mot-la.mp3"
  },
  {
    "command": "humilite-infiltration.mp3",
    "file": "humilite-infiltration.mp3"
  },
  {
    "command": "ici-chez-les-salopards.mp3",
    "file": "ici-chez-les-salopards.mp3"
  },
  {
    "command": "il-avait-une-touffe-de-cheveux-comme-ca-un-vieux-moisi-tout-gueze-a-poil-dans-la-neige.mp3",
    "file": "il-avait-une-touffe-de-cheveux-comme-ca-un-vieux-moisi-tout-gueze-a-poil-dans-la-neige.mp3"
  },
  {
    "command": "il-est-coince-ce-con-la.mp3",
    "file": "il-est-coince-ce-con-la.mp3"
  },
  {
    "command": "il-est-fort-le-salaud.mp3",
    "file": "il-est-fort-le-salaud.mp3"
  },
  {
    "command": "il-est-pas-beau-mon-graal.mp3",
    "file": "il-est-pas-beau-mon-graal.mp3"
  },
  {
    "command": "il-faut-affranchir-nos-compagnons.mp3",
    "file": "il-faut-affranchir-nos-compagnons.mp3"
  },
  {
    "command": "il-m-aura-fait-chier-jusqu-au-bout-celui-la.mp3",
    "file": "il-m-aura-fait-chier-jusqu-au-bout-celui-la.mp3"
  },
  {
    "command": "il-ne-comprennent-jamais-le-code.mp3",
    "file": "il-ne-comprennent-jamais-le-code.mp3"
  },
  {
    "command": "il-nous-a-chie-dessus.mp3",
    "file": "il-nous-a-chie-dessus.mp3"
  },
  {
    "command": "il-n-y-a-pas-dequivoque-vous-etes-franchement-un-bourrin.mp3",
    "file": "il-n-y-a-pas-dequivoque-vous-etes-franchement-un-bourrin.mp3"
  },
  {
    "command": "il-n-y-a-rien-a-prier.mp3",
    "file": "il-n-y-a-rien-a-prier.mp3"
  },
  {
    "command": "il-pige-rien-a-rien.mp3",
    "file": "il-pige-rien-a-rien.mp3"
  },
  {
    "command": "il-pue-il-pete.mp3",
    "file": "il-pue-il-pete.mp3"
  },
  {
    "command": "il-ressemble-a-tatan.mp3",
    "file": "il-ressemble-a-tatan.mp3"
  },
  {
    "command": "ils-commencent-par-apprendre-a-lire.mp3",
    "file": "ils-commencent-par-apprendre-a-lire.mp3"
  },
  {
    "command": "ils-se-barrent-en-mission-pendant-trois-mois-et-ils-reviennent-avec-une-anguille.mp3",
    "file": "ils-se-barrent-en-mission-pendant-trois-mois-et-ils-reviennent-avec-une-anguille.mp3"
  },
  {
    "command": "ils-se-sont-pas-leve-1.mp3",
    "file": "ils-se-sont-pas-leve-1.mp3"
  },
  {
    "command": "ils-se-sont-pas-leve-2.mp3",
    "file": "ils-se-sont-pas-leve-2.mp3"
  },
  {
    "command": "ils-se-sont-pas-leve-3.mp3",
    "file": "ils-se-sont-pas-leve-3.mp3"
  },
  {
    "command": "ils-sortent-bien-de-quelques-part.mp3",
    "file": "ils-sortent-bien-de-quelques-part.mp3"
  },
  {
    "command": "il-trouverait-meme-pas-sa-bite-pour-pisser.mp3",
    "file": "il-trouverait-meme-pas-sa-bite-pour-pisser.mp3"
  },
  {
    "command": "inattendu.mp3",
    "file": "inattendu.mp3"
  },
  {
    "command": "incandescent.mp3",
    "file": "incandescent.mp3"
  },
  {
    "command": "insipide.mp3",
    "file": "insipide.mp3"
  },
  {
    "command": "insoupconnable.mp3",
    "file": "insoupconnable.mp3"
  },
  {
    "command": "interprete.mp3",
    "file": "interprete.mp3"
  },
  {
    "command": "intro-comaque.mp3",
    "file": "intro-comaque.mp3"
  },
  {
    "command": "jai-arrete-les-pronostics.mp3",
    "file": "jai-arrete-les-pronostics.mp3"
  },
  {
    "command": "j-ai-cherche-la-merde.mp3",
    "file": "j-ai-cherche-la-merde.mp3"
  },
  {
    "command": "jai-ecrase-ma-bdd.mp3",
    "file": "jai-ecrase-ma-bdd.mp3"
  },
  {
    "command": "j-ai-fais-pile-comme-vous-avez-dis-tout-au-feu-de-bois.mp3",
    "file": "j-ai-fais-pile-comme-vous-avez-dis-tout-au-feu-de-bois.mp3"
  },
  {
    "command": "j-ai-le-droit-d-etre-4-jours-pas-chez-moi.mp3",
    "file": "j-ai-le-droit-d-etre-4-jours-pas-chez-moi.mp3"
  },
  {
    "command": "jai-le-droit-detre-4-jours-pas-chez-moi.mp3",
    "file": "jai-le-droit-detre-4-jours-pas-chez-moi.mp3"
  },
  {
    "command": "j-aimerais-bien-qu-on-commence-a-me-considerer-en-tant-que-tel.mp3",
    "file": "j-aimerais-bien-qu-on-commence-a-me-considerer-en-tant-que-tel.mp3"
  },
  {
    "command": "jai-pas-envie-de-voir-vos-tronches.mp3",
    "file": "jai-pas-envie-de-voir-vos-tronches.mp3"
  },
  {
    "command": "j-ai-pas-eu-le-temps-d-enlever-mon-armure.mp3",
    "file": "j-ai-pas-eu-le-temps-d-enlever-mon-armure.mp3"
  },
  {
    "command": "jai-rien-compris.mp3",
    "file": "jai-rien-compris.mp3"
  },
  {
    "command": "jai-toujours-ete-fascine-par-le-monde-paysan.mp3",
    "file": "jai-toujours-ete-fascine-par-le-monde-paysan.mp3"
  },
  {
    "command": "j-ai-tout-entendu.mp3",
    "file": "j-ai-tout-entendu.mp3"
  },
  {
    "command": "j-apprecie-les-fruits-au-sirop.mp3",
    "file": "j-apprecie-les-fruits-au-sirop.mp3"
  },
  {
    "command": "je-connais-que-le-cri.mp3",
    "file": "je-connais-que-le-cri.mp3"
  },
  {
    "command": "je-crois-pas-que-vous-soyez-le-symbole-de-la-nation-bretonne.mp3",
    "file": "je-crois-pas-que-vous-soyez-le-symbole-de-la-nation-bretonne.mp3"
  },
  {
    "command": "je-l-ai-pas-dit-fort.mp3",
    "file": "je-l-ai-pas-dit-fort.mp3"
  },
  {
    "command": "je-l-ai-perdu.mp3",
    "file": "je-l-ai-perdu.mp3"
  },
  {
    "command": "je-moccupe-de-tout-dite-oui.mp3",
    "file": "je-moccupe-de-tout-dite-oui.mp3"
  },
  {
    "command": "j-en-ai-rien-a-foutre.mp3",
    "file": "j-en-ai-rien-a-foutre.mp3"
  },
  {
    "command": "je-ne-mange-pas-de-graines.mp3",
    "file": "je-ne-mange-pas-de-graines.mp3"
  },
  {
    "command": "je-pourrais-gueuler-dans-le-cul-dun-poney.mp3",
    "file": "je-pourrais-gueuler-dans-le-cul-dun-poney.mp3"
  },
  {
    "command": "je-refuse-daller-me-battre.mp3",
    "file": "je-refuse-daller-me-battre.mp3"
  },
  {
    "command": "je-sens-que-ce-va-encore-etre-capital.mp3",
    "file": "je-sens-que-ce-va-encore-etre-capital.mp3"
  },
  {
    "command": "je-trouve-qu-on-nous-prend-un-peu-trop-pour-des-cons.mp3",
    "file": "je-trouve-qu-on-nous-prend-un-peu-trop-pour-des-cons.mp3"
  },
  {
    "command": "je-vais-devenir-paladin.mp3",
    "file": "je-vais-devenir-paladin.mp3"
  },
  {
    "command": "je-vais-pas-faire-des-aller-retours-3-fois-par-jours.mp3",
    "file": "je-vais-pas-faire-des-aller-retours-3-fois-par-jours.mp3"
  },
  {
    "command": "je-vais-vous-passer-le-gout-du-plein-air-moi.mp3",
    "file": "je-vais-vous-passer-le-gout-du-plein-air-moi.mp3"
  },
  {
    "command": "je-veux-mhabiller-de-lierre-et-me-coiffer-de-roseaux.mp3",
    "file": "je-veux-mhabiller-de-lierre-et-me-coiffer-de-roseaux.mp3"
  },
  {
    "command": "je-vois.mp3",
    "file": "je-vois.mp3"
  },
  {
    "command": "je-vois-pas-le-rapport-avec-bretagne.mp3",
    "file": "je-vois-pas-le-rapport-avec-bretagne.mp3"
  },
  {
    "command": "je-vois-trouble.mp3",
    "file": "je-vois-trouble.mp3"
  },
  {
    "command": "je-vous-ai-toujours-dit-ce-que-vous-faites-avec-les-chiffres.mp3",
    "file": "je-vous-ai-toujours-dit-ce-que-vous-faites-avec-les-chiffres.mp3"
  },
  {
    "command": "je-vous-disais-que-j-etais-victime-des-colifiches.mp3",
    "file": "je-vous-disais-que-j-etais-victime-des-colifiches.mp3"
  },
  {
    "command": "joie-de-vivre.mp3",
    "file": "joie-de-vivre.mp3"
  },
  {
    "command": "jpeux-pas-vous-dire.mp3",
    "file": "jpeux-pas-vous-dire.mp3"
  },
  {
    "command": "jsais-pas-cqui-vous-faut.mp3",
    "file": "jsais-pas-cqui-vous-faut.mp3"
  },
  {
    "command": "jsuis-a-mon-poste-cest-pas-le-cas-de-tout-le-monde.mp3",
    "file": "jsuis-a-mon-poste-cest-pas-le-cas-de-tout-le-monde.mp3"
  },
  {
    "command": "jvoudrais-pas-faire-ma-raclette.mp3",
    "file": "jvoudrais-pas-faire-ma-raclette.mp3"
  },
  {
    "command": "jvous-fait-confiance.mp3",
    "file": "jvous-fait-confiance.mp3"
  },
  {
    "command": "jy-vais-javoine.mp3",
    "file": "jy-vais-javoine.mp3"
  },
  {
    "command": "kaamelott-cest-pas-une-cooperative-bovine.mp3",
    "file": "kaamelott-cest-pas-une-cooperative-bovine.mp3"
  },
  {
    "command": "karadoc-cest-le-gars-brillant.mp3",
    "file": "karadoc-cest-le-gars-brillant.mp3"
  },
  {
    "command": "la-blague-est-pas-drole.mp3",
    "file": "la-blague-est-pas-drole.mp3"
  },
  {
    "command": "la-bouffe-est-interdite.mp3",
    "file": "la-bouffe-est-interdite.mp3"
  },
  {
    "command": "la-cest-sur-vu-les-tronche-que-vous-tirez.mp3",
    "file": "la-cest-sur-vu-les-tronche-que-vous-tirez.mp3"
  },
  {
    "command": "lache-une-caisse.mp3",
    "file": "lache-une-caisse.mp3"
  },
  {
    "command": "la-chevre-a-beler-5-min.mp3",
    "file": "la-chevre-a-beler-5-min.mp3"
  },
  {
    "command": "la-dedans-carbure.mp3",
    "file": "la-dedans-carbure.mp3"
  },
  {
    "command": "la-gerbe.mp3",
    "file": "la-gerbe.mp3"
  },
  {
    "command": "lair-idiote.mp3",
    "file": "lair-idiote.mp3"
  },
  {
    "command": "laissez-le-a-lair.mp3",
    "file": "laissez-le-a-lair.mp3"
  },
  {
    "command": "la-monstruosite.mp3",
    "file": "la-monstruosite.mp3"
  },
  {
    "command": "la-tournure-est-plus-graduelle.mp3",
    "file": "la-tournure-est-plus-graduelle.mp3"
  },
  {
    "command": "la-vache-ca-daube-la-dedans-il-y-a-un-chat-qui-est-creve-ou-quoi.mp3",
    "file": "la-vache-ca-daube-la-dedans-il-y-a-un-chat-qui-est-creve-ou-quoi.mp3"
  },
  {
    "command": "la-vue-du-bourgeois-ca-me-fait-de-laerophagie.mp3",
    "file": "la-vue-du-bourgeois-ca-me-fait-de-laerophagie.mp3"
  },
  {
    "command": "le-caca-des-pigeons-c-est-caca-faut-pas-manger.mp3",
    "file": "le-caca-des-pigeons-c-est-caca-faut-pas-manger.mp3"
  },
  {
    "command": "le-graal-par-ci-le-graal-par-la.mp3",
    "file": "le-graal-par-ci-le-graal-par-la.mp3"
  },
  {
    "command": "le-gras-cest-la-vie.mp3",
    "file": "le-gras-cest-la-vie.mp3"
  },
  {
    "command": "le-plus-interessant-cest-comment-vous-arrivez-a-faire-un-truc-aussi-immonde.mp3",
    "file": "le-plus-interessant-cest-comment-vous-arrivez-a-faire-un-truc-aussi-immonde.mp3"
  },
  {
    "command": "le-pognon-ca-va-ca-vient.mp3",
    "file": "le-pognon-ca-va-ca-vient.mp3"
  },
  {
    "command": "le-poisson-le-petit-poisson.mp3",
    "file": "le-poisson-le-petit-poisson.mp3"
  },
  {
    "command": "le-prochain-qui-l-ouvre-galeres-trois-ans.mp3",
    "file": "le-prochain-qui-l-ouvre-galeres-trois-ans.mp3"
  },
  {
    "command": "les-chevaliers-de-mes-deux.mp3",
    "file": "les-chevaliers-de-mes-deux.mp3"
  },
  {
    "command": "le-seigneur-perceval-ne-se-met-jamais-en-situation-dangeureuse.mp3",
    "file": "le-seigneur-perceval-ne-se-met-jamais-en-situation-dangeureuse.mp3"
  },
  {
    "command": "les-femmes-jaime-pas-ca-c'est-de-la-saloperie.mp3",
    "file": "les-femmes-jaime-pas-ca-c'est-de-la-saloperie.mp3"
  },
  {
    "command": "les-pattes-de-canard.mp3",
    "file": "les-pattes-de-canard.mp3"
  },
  {
    "command": "les-petits-pedestres-dont-un-au-lion.mp3",
    "file": "les-petits-pedestres-dont-un-au-lion.mp3"
  },
  {
    "command": "les-petits-pedestres.mp3",
    "file": "les-petits-pedestres.mp3"
  },
  {
    "command": "les-premieres-oeillades.mp3",
    "file": "les-premieres-oeillades.mp3"
  },
  {
    "command": "le-votre-aussi-cest-de-la-merde.mp3",
    "file": "le-votre-aussi-cest-de-la-merde.mp3"
  },
  {
    "command": "lui-on-comprend-ni-ce-qu-il-dit-ni-ce-qu-il-fait.mp3",
    "file": "lui-on-comprend-ni-ce-qu-il-dit-ni-ce-qu-il-fait.mp3"
  },
  {
    "command": "madresse-pas-la-parole.mp3",
    "file": "madresse-pas-la-parole.mp3"
  },
  {
    "command": "ma-femme-a-pas-de-moustache.mp3",
    "file": "ma-femme-a-pas-de-moustache.mp3"
  },
  {
    "command": "maintenant-il-faut-nous-ecouter-parce-que-la-on-en-a-gros.mp3",
    "file": "maintenant-il-faut-nous-ecouter-parce-que-la-on-en-a-gros.mp3"
  },
  {
    "command": "mais-allez-chier-dans-une-fiolle.mp3",
    "file": "mais-allez-chier-dans-une-fiolle.mp3"
  },
  {
    "command": "mais-allez-y-cest-pour-vous-stimuler-bon-dieu.mp3",
    "file": "mais-allez-y-cest-pour-vous-stimuler-bon-dieu.mp3"
  },
  {
    "command": "mais-allez-y-magnez-vous-le-fion-espece-de-grosse-dinde.mp3",
    "file": "mais-allez-y-magnez-vous-le-fion-espece-de-grosse-dinde.mp3"
  },
  {
    "command": "mais-arretez-de-discutailler-cinq-minutes.mp3",
    "file": "mais-arretez-de-discutailler-cinq-minutes.mp3"
  },
  {
    "command": "mais-cest-de-la-merde.mp3",
    "file": "mais-cest-de-la-merde.mp3"
  },
  {
    "command": "mais-cest-incroyable-jai-limpression-de-bouffer-de-la-terre.mp3",
    "file": "mais-cest-incroyable-jai-limpression-de-bouffer-de-la-terre.mp3"
  },
  {
    "command": "mais-cest-pas-complique-quand-vous-voyez-des-gadins.mp3",
    "file": "mais-cest-pas-complique-quand-vous-voyez-des-gadins.mp3"
  },
  {
    "command": "mais-c-est-pas-possible-d-entendre-ca.mp3",
    "file": "mais-c-est-pas-possible-d-entendre-ca.mp3"
  },
  {
    "command": "mais-c-est-une-honte-d-entendre-des-trucs-comme-ca.mp3",
    "file": "mais-c-est-une-honte-d-entendre-des-trucs-comme-ca.mp3"
  },
  {
    "command": "mais-compare-a-ce-quon-a-trouve.mp3",
    "file": "mais-compare-a-ce-quon-a-trouve.mp3"
  },
  {
    "command": "mais-evidemment-cest-sans-alcool.mp3",
    "file": "mais-evidemment-cest-sans-alcool.mp3"
  },
  {
    "command": "mais-evidemment-que-si.mp3",
    "file": "mais-evidemment-que-si.mp3"
  },
  {
    "command": "mais-faut-pas-deconner-ils-y-sont-pour-rien.mp3",
    "file": "mais-faut-pas-deconner-ils-y-sont-pour-rien.mp3"
  },
  {
    "command": "mais-je-le-sais-bien-que-vous-avez-pas-les-cles-andouille.mp3",
    "file": "mais-je-le-sais-bien-que-vous-avez-pas-les-cles-andouille.mp3"
  },
  {
    "command": "mais-je-vous-ai-dis-que-c-etait-important.mp3",
    "file": "mais-je-vous-ai-dis-que-c-etait-important.mp3"
  },
  {
    "command": "mais-je-vous-emmerde-mon-ptit-pote.mp3",
    "file": "mais-je-vous-emmerde-mon-ptit-pote.mp3"
  },
  {
    "command": "mais-mariez-vous-avec-qui-vous-voulez-et-allez-crever.mp3",
    "file": "mais-mariez-vous-avec-qui-vous-voulez-et-allez-crever.mp3"
  },
  {
    "command": "mais-moi-je-vous-previens-jy-connais-rien-en-champignon.mp3",
    "file": "mais-moi-je-vous-previens-jy-connais-rien-en-champignon.mp3"
  },
  {
    "command": "mais-non-qu-est-ce-que-jen-ai-a-carrer.mp3",
    "file": "mais-non-qu-est-ce-que-jen-ai-a-carrer.mp3"
  },
  {
    "command": "mais-pas-du-tout.mp3",
    "file": "mais-pas-du-tout.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-j-en-ai-a-foutre.mp3",
    "file": "mais-qu-est-ce-que-j-en-ai-a-foutre.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-j-en-ai-a-foutre-vous-pourriez-bien-vous-marier-avec-une-chevre-si-ca-vous-chante.mp3",
    "file": "mais-qu-est-ce-que-j-en-ai-a-foutre-vous-pourriez-bien-vous-marier-avec-une-chevre-si-ca-vous-chante.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-vous-me-bavez-encore.mp3",
    "file": "mais-qu-est-ce-que-vous-me-bavez-encore.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-vous-venez-me-gonfler-avec-votre-pere-blaise.mp3",
    "file": "mais-qu-est-ce-que-vous-venez-me-gonfler-avec-votre-pere-blaise.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-vous-voulez-que-ca-me-foute.mp3",
    "file": "mais-qu-est-ce-que-vous-voulez-que-ca-me-foute.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-vous-voulez-que-ca-me-foute-vos-conneries.mp3",
    "file": "mais-qu-est-ce-que-vous-voulez-que-ca-me-foute-vos-conneries.mp3"
  },
  {
    "command": "mais-qu-est-ce-que-vous-voulez-quon-en-foute-de-vos-peigne-culs.mp3",
    "file": "mais-qu-est-ce-que-vous-voulez-quon-en-foute-de-vos-peigne-culs.mp3"
  },
  {
    "command": "mais-qu-est-ce-qui-vous-prend-ca-va-pas-vous-etes-dingue.mp3",
    "file": "mais-qu-est-ce-qui-vous-prend-ca-va-pas-vous-etes-dingue.mp3"
  },
  {
    "command": "mais-si-on-fait-marrer-tout-le-monde.mp3",
    "file": "mais-si-on-fait-marrer-tout-le-monde.mp3"
  },
  {
    "command": "mais-tout-a-fait.mp3",
    "file": "mais-tout-a-fait.mp3"
  },
  {
    "command": "mais-vous-etes-pas-mort-espece-de-connard.mp3",
    "file": "mais-vous-etes-pas-mort-espece-de-connard.mp3"
  },
  {
    "command": "mais-vous-guidez-que-dalle.mp3",
    "file": "mais-vous-guidez-que-dalle.mp3"
  },
  {
    "command": "mais-vous-savez-ce-que-ca-veux-dire-au-moins.mp3",
    "file": "mais-vous-savez-ce-que-ca-veux-dire-au-moins.mp3"
  },
  {
    "command": "mais-ya-rien-a-developper-cest-de-la-merde-cest-tout.mp3",
    "file": "mais-ya-rien-a-developper-cest-de-la-merde-cest-tout.mp3"
  },
  {
    "command": "malademental.mp3",
    "file": "malademental.mp3"
  },
  {
    "command": "mavez-lair-en-forme.mp3",
    "file": "mavez-lair-en-forme.mp3"
  },
  {
    "command": "mecreant-2.mp3",
    "file": "mecreant-2.mp3"
  },
  {
    "command": "mecreant.mp3",
    "file": "mecreant.mp3"
  },
  {
    "command": "me-parler-a-cette-heure-ci-vous-voulez-mon-pied-au-cul.mp3",
    "file": "me-parler-a-cette-heure-ci-vous-voulez-mon-pied-au-cul.mp3"
  },
  {
    "command": "merci-de-rien.mp3",
    "file": "merci-de-rien.mp3"
  },
  {
    "command": "merciiiii.mp3",
    "file": "merciiiii.mp3"
  },
  {
    "command": "merde-la-ca-vous-va-ca.mp3",
    "file": "merde-la-ca-vous-va-ca.mp3"
  },
  {
    "command": "mes-endives.mp3",
    "file": "mes-endives.mp3"
  },
  {
    "command": "meteo.mp3",
    "file": "meteo.mp3"
  },
  {
    "command": "mettre-du-beurre-au-fond-du-plat.mp3",
    "file": "mettre-du-beurre-au-fond-du-plat.mp3"
  },
  {
    "command": "mi-ours-mi-scorpion.mp3",
    "file": "mi-ours-mi-scorpion.mp3"
  },
  {
    "command": "mochete-en-plus-quand-on-voit-le-morceau-quil-se-trimballe.mp3",
    "file": "mochete-en-plus-quand-on-voit-le-morceau-quil-se-trimballe.mp3"
  },
  {
    "command": "moi-a-lepoque-je-voulais-faire-voeux-de-pauvrete----et-alors-----ben-avec-le-pognon-que-j.mp3",
    "file": "moi-a-lepoque-je-voulais-faire-voeux-de-pauvrete----et-alors-----ben-avec-le-pognon-que-j.mp3"
  },
  {
    "command": "moi-depuis-ce-matin-je-me-fait-traiter-de-gonzesse.mp3",
    "file": "moi-depuis-ce-matin-je-me-fait-traiter-de-gonzesse.mp3"
  },
  {
    "command": "moi-il-faut-que-j-enleve-mon-armure.mp3",
    "file": "moi-il-faut-que-j-enleve-mon-armure.mp3"
  },
  {
    "command": "moi-jai-toujours-dit2.mp3",
    "file": "moi-jai-toujours-dit2.mp3"
  },
  {
    "command": "moi-jai-toujours-dit.mp3",
    "file": "moi-jai-toujours-dit.mp3"
  },
  {
    "command": "moi-je-serais-vous-je-vous-ecouterais.mp3",
    "file": "moi-je-serais-vous-je-vous-ecouterais.mp3"
  },
  {
    "command": "moi-non-plus-je-vois-rien.mp3",
    "file": "moi-non-plus-je-vois-rien.mp3"
  },
  {
    "command": "moi-pour-quon-me-reconnaisse-faut-juste-2-3-coups-de-pinceaux.mp3",
    "file": "moi-pour-quon-me-reconnaisse-faut-juste-2-3-coups-de-pinceaux.mp3"
  },
  {
    "command": "mon-frere-y-peut-pas-aller-a-l-ecole.mp3",
    "file": "mon-frere-y-peut-pas-aller-a-l-ecole.mp3"
  },
  {
    "command": "mordu.mp3",
    "file": "mordu.mp3"
  },
  {
    "command": "nan-ca-va-pas-etre-possible-ca.mp3",
    "file": "nan-ca-va-pas-etre-possible-ca.mp3"
  },
  {
    "command": "nan-cest-nimporte-quoi.mp3",
    "file": "nan-cest-nimporte-quoi.mp3"
  },
  {
    "command": "nan-la-sans-deconner-cest-zero.mp3",
    "file": "nan-la-sans-deconner-cest-zero.mp3"
  },
  {
    "command": "nan-mais-c-est-pas-possible-elle-me-foutra-pas-la-paix.mp3",
    "file": "nan-mais-c-est-pas-possible-elle-me-foutra-pas-la-paix.mp3"
  },
  {
    "command": "nan-mais-en-vrai-pas-sur-la-carte.mp3",
    "file": "nan-mais-en-vrai-pas-sur-la-carte.mp3"
  },
  {
    "command": "nan-mais-par-contre-ils-sont-super-cons.mp3",
    "file": "nan-mais-par-contre-ils-sont-super-cons.mp3"
  },
  {
    "command": "nan-mais-quand-meme.mp3",
    "file": "nan-mais-quand-meme.mp3"
  },
  {
    "command": "nan-nan-nous-on-est-pas-fixe.mp3",
    "file": "nan-nan-nous-on-est-pas-fixe.mp3"
  },
  {
    "command": "nempeche-que-cest-moi-qui-avait-propose.mp3",
    "file": "nempeche-que-cest-moi-qui-avait-propose.mp3"
  },
  {
    "command": "ne-te-mets-pas-en-dehors-du-chemin-de-la-redemption.mp3",
    "file": "ne-te-mets-pas-en-dehors-du-chemin-de-la-redemption.mp3"
  },
  {
    "command": "ni-vu-ni-connu.mp3",
    "file": "ni-vu-ni-connu.mp3"
  },
  {
    "command": "non-il-est-degueulasse-celui-la.mp3",
    "file": "non-il-est-degueulasse-celui-la.mp3"
  },
  {
    "command": "non-mais-biensur-donc-vous-vous-degommez-les-souris-au-maillet.mp3",
    "file": "non-mais-biensur-donc-vous-vous-degommez-les-souris-au-maillet.mp3"
  },
  {
    "command": "non-mais-franchement-je-serais-nous-je-vous-ecouterais.mp3",
    "file": "non-mais-franchement-je-serais-nous-je-vous-ecouterais.mp3"
  },
  {
    "command": "non-mais-je-sens-bien-que-vous-essayer-de-me-dire-quelque-chose.mp3",
    "file": "non-mais-je-sens-bien-que-vous-essayer-de-me-dire-quelque-chose.mp3"
  },
  {
    "command": "non-mais-vous-pouvez-la-distraire-avec-un-numero-de-jonglage.mp3",
    "file": "non-mais-vous-pouvez-la-distraire-avec-un-numero-de-jonglage.mp3"
  },
  {
    "command": "non-on-a-fait-3-bornes-sil-vous-plait.mp3",
    "file": "non-on-a-fait-3-bornes-sil-vous-plait.mp3"
  },
  {
    "command": "non-psychologique-c-est-tout-ce-qui-est-a-la-campagne.mp3",
    "file": "non-psychologique-c-est-tout-ce-qui-est-a-la-campagne.mp3"
  },
  {
    "command": "non-taisez-vous.mp3",
    "file": "non-taisez-vous.mp3"
  },
  {
    "command": "notre-enchanteur-minforme-que-dhabitude-il-y-arrive-tres-bien.mp3",
    "file": "notre-enchanteur-minforme-que-dhabitude-il-y-arrive-tres-bien.mp3"
  },
  {
    "command": "nous-on-foule-le-fruit-avec-nos-propres-pieds.mp3",
    "file": "nous-on-foule-le-fruit-avec-nos-propres-pieds.mp3"
  },
  {
    "command": "nuo-pusso-volo.mp3",
    "file": "nuo-pusso-volo.mp3"
  },
  {
    "command": "oh-bah-oui-vous-en-etes-une-belle-forme-durticaire.mp3",
    "file": "oh-bah-oui-vous-en-etes-une-belle-forme-durticaire.mp3"
  },
  {
    "command": "oh-ca-fait-rien.mp3",
    "file": "oh-ca-fait-rien.mp3"
  },
  {
    "command": "oh-cest-la-vacherie-ca.mp3",
    "file": "oh-cest-la-vacherie-ca.mp3"
  },
  {
    "command": "oh-et-puis-j-en-ai-marre.mp3",
    "file": "oh-et-puis-j-en-ai-marre.mp3"
  },
  {
    "command": "oh-la-vache-mais-cest-nul.mp3",
    "file": "oh-la-vache-mais-cest-nul.mp3"
  },
  {
    "command": "oh-la-vache.mp3",
    "file": "oh-la-vache.mp3"
  },
  {
    "command": "oh-non-mais-il-y-a-des-jours-vous-deconnez-sec.mp3",
    "file": "oh-non-mais-il-y-a-des-jours-vous-deconnez-sec.mp3"
  },
  {
    "command": "oh-putain-oui.mp3",
    "file": "oh-putain-oui.mp3"
  },
  {
    "command": "ok-on-va-arreter-le-tire-avec-les-defis.mp3",
    "file": "ok-on-va-arreter-le-tire-avec-les-defis.mp3"
  },
  {
    "command": "on-a-pas-regarde-dans-les-f.mp3",
    "file": "on-a-pas-regarde-dans-les-f.mp3"
  },
  {
    "command": "on-en-a-gros.mp3",
    "file": "on-en-a-gros.mp3"
  },
  {
    "command": "on-essaie-de-catapulter-un-danseur.mp3",
    "file": "on-essaie-de-catapulter-un-danseur.mp3"
  },
  {
    "command": "on-est-forts.mp3",
    "file": "on-est-forts.mp3"
  },
  {
    "command": "on-est-indestructible.mp3",
    "file": "on-est-indestructible.mp3"
  },
  {
    "command": "on-est-pas-sorti-du-sable.mp3",
    "file": "on-est-pas-sorti-du-sable.mp3"
  },
  {
    "command": "on-fera-tintin-pour-le-clafoutis.mp3",
    "file": "on-fera-tintin-pour-le-clafoutis.mp3"
  },
  {
    "command": "on-pisse-pas-contre-les-murs-de-la-chapelle-cest-clair.mp3",
    "file": "on-pisse-pas-contre-les-murs-de-la-chapelle-cest-clair.mp3"
  },
  {
    "command": "on-plaisante-on-plaisante.mp3",
    "file": "on-plaisante-on-plaisante.mp3"
  },
  {
    "command": "ouais-ca-aussi.mp3",
    "file": "ouais-ca-aussi.mp3"
  },
  {
    "command": "ouais-cest-grace-a-notre-arme-secrete.mp3",
    "file": "ouais-cest-grace-a-notre-arme-secrete.mp3"
  },
  {
    "command": "ouais-cest-mortel-ouais.mp3",
    "file": "ouais-cest-mortel-ouais.mp3"
  },
  {
    "command": "oui-ben-non.mp3",
    "file": "oui-ben-non.mp3"
  },
  {
    "command": "oui-enfin-je-me-comprends.mp3",
    "file": "oui-enfin-je-me-comprends.mp3"
  },
  {
    "command": "oui-et-ben-moi-je-vous-donne-lordre-de-lui-preter-votre-corne-parce-que-quand-on-est-gentil-on-prete.mp3",
    "file": "oui-et-ben-moi-je-vous-donne-lordre-de-lui-preter-votre-corne-parce-que-quand-on-est-gentil-on-prete.mp3"
  },
  {
    "command": "oui.mp3",
    "file": "oui.mp3"
  },
  {
    "command": "oui-oh-ca-va-je-connais-le-couplet-on-est-fatigue-on-est-fatigue-vous-me-le-cancane-depuis-midi.mp3",
    "file": "oui-oh-ca-va-je-connais-le-couplet-on-est-fatigue-on-est-fatigue-vous-me-le-cancane-depuis-midi.mp3"
  },
  {
    "command": "oui-ou-une-fissure-a-colmater-dans-un-muret.mp3",
    "file": "oui-ou-une-fissure-a-colmater-dans-un-muret.mp3"
  },
  {
    "command": "oui-peut-etre-oui-oui.mp3",
    "file": "oui-peut-etre-oui-oui.mp3"
  },
  {
    "command": "parce-que-la-quite-a-se-faire-reperer-on-prendrait-moins-de-risque-a-faire-venir-un-orchestre.mp3",
    "file": "parce-que-la-quite-a-se-faire-reperer-on-prendrait-moins-de-risque-a-faire-venir-un-orchestre.mp3"
  },
  {
    "command": "parce-que-vous-etes-en-train-de-faire-une-connerie-la-quand-meme.mp3",
    "file": "parce-que-vous-etes-en-train-de-faire-une-connerie-la-quand-meme.mp3"
  },
  {
    "command": "par-contre-il-est-hyper-con-je-sais-pas-pourquoi.mp3",
    "file": "par-contre-il-est-hyper-con-je-sais-pas-pourquoi.mp3"
  },
  {
    "command": "parfaitement-antipathique.mp3",
    "file": "parfaitement-antipathique.mp3"
  },
  {
    "command": "parle-de-travers-cureton.mp3",
    "file": "parle-de-travers-cureton.mp3"
  },
  {
    "command": "pas-dalcool.mp3",
    "file": "pas-dalcool.mp3"
  },
  {
    "command": "pas-de-paix.mp3",
    "file": "pas-de-paix.mp3"
  },
  {
    "command": "pas-de-quoi-en-chier-une-galette.mp3",
    "file": "pas-de-quoi-en-chier-une-galette.mp3"
  },
  {
    "command": "pas-du-tout-les-lapins-les-lapins-c-est-gentil.mp3",
    "file": "pas-du-tout-les-lapins-les-lapins-c-est-gentil.mp3"
  },
  {
    "command": "pas-envie-de-participer.mp3",
    "file": "pas-envie-de-participer.mp3"
  },
  {
    "command": "pas-foutu-de-savoir-son-nom.mp3",
    "file": "pas-foutu-de-savoir-son-nom.mp3"
  },
  {
    "command": "pas-moyen-de-lui-faire-fermer-sa-gueule.mp3",
    "file": "pas-moyen-de-lui-faire-fermer-sa-gueule.mp3"
  },
  {
    "command": "pas-moyen-de-piger-un-broc-de-ce-quil-dit.mp3",
    "file": "pas-moyen-de-piger-un-broc-de-ce-quil-dit.mp3"
  },
  {
    "command": "patience-plat-sans-sauce.mp3",
    "file": "patience-plat-sans-sauce.mp3"
  },
  {
    "command": "pauvre-conne.mp3",
    "file": "pauvre-conne.mp3"
  },
  {
    "command": "pays-de-galles-independant.mp3",
    "file": "pays-de-galles-independant.mp3"
  },
  {
    "command": "peigne-zizi.mp3",
    "file": "peigne-zizi.mp3"
  },
  {
    "command": "petit-a-petit-vers-plus-dautonomie.mp3",
    "file": "petit-a-petit-vers-plus-dautonomie.mp3"
  },
  {
    "command": "petite-corne.mp3",
    "file": "petite-corne.mp3"
  },
  {
    "command": "petit-ton-decale.mp3",
    "file": "petit-ton-decale.mp3"
  },
  {
    "command": "peut-etre-meme-que-je-mette-une-armure.mp3",
    "file": "peut-etre-meme-que-je-mette-une-armure.mp3"
  },
  {
    "command": "pfff-c-est-pour-ca-que-je-pane-rien-aux-livres-moi-ca-veut-pas-dire-ce-qu-il-y-a-marque.mp3",
    "file": "pfff-c-est-pour-ca-que-je-pane-rien-aux-livres-moi-ca-veut-pas-dire-ce-qu-il-y-a-marque.mp3"
  },
  {
    "command": "pfiou-pfiou-pfiou.mp3",
    "file": "pfiou-pfiou-pfiou.mp3"
  },
  {
    "command": "pique-diagonale.mp3",
    "file": "pique-diagonale.mp3"
  },
  {
    "command": "pires-trucs-reparation.mp3",
    "file": "pires-trucs-reparation.mp3"
  },
  {
    "command": "plait-il.mp3",
    "file": "plait-il.mp3"
  },
  {
    "command": "plus-trop-parler.mp3",
    "file": "plus-trop-parler.mp3"
  },
  {
    "command": "politique-de-l-autruche.mp3",
    "file": "politique-de-l-autruche.mp3"
  },
  {
    "command": "poopi.mp3",
    "file": "poopi.mp3"
  },
  {
    "command": "pour-le-detail-je-sais-pas.mp3",
    "file": "pour-le-detail-je-sais-pas.mp3"
  },
  {
    "command": "pourquoi-pas1.mp3",
    "file": "pourquoi-pas1.mp3"
  },
  {
    "command": "pourquoi-pas2.mp3",
    "file": "pourquoi-pas2.mp3"
  },
  {
    "command": "pourquoi-qu-on-gueule.mp3",
    "file": "pourquoi-qu-on-gueule.mp3"
  },
  {
    "command": "pourquoi-voulez-vous-que-je-pense-a-la-reine.mp3",
    "file": "pourquoi-voulez-vous-que-je-pense-a-la-reine.mp3"
  },
  {
    "command": "pour-savoir-si-il-va-y-avoir-du-vent.mp3",
    "file": "pour-savoir-si-il-va-y-avoir-du-vent.mp3"
  },
  {
    "command": "ptetre-une-connerie.mp3",
    "file": "ptetre-une-connerie.mp3"
  },
  {
    "command": "ptite-pucelle.mp3",
    "file": "ptite-pucelle.mp3"
  },
  {
    "command": "putain-faut-vraiment-qu-on-se-groulle.mp3",
    "file": "putain-faut-vraiment-qu-on-se-groulle.mp3"
  },
  {
    "command": "putain-il-est-fort-ce-con.mp3",
    "file": "putain-il-est-fort-ce-con.mp3"
  },
  {
    "command": "quand-je-comprends-pas-je-reponds-pas.mp3",
    "file": "quand-je-comprends-pas-je-reponds-pas.mp3"
  },
  {
    "command": "quand-meme-raide.mp3",
    "file": "quand-meme-raide.mp3"
  },
  {
    "command": "quand-on-gueule-sans-savoir-pourquoi.mp3",
    "file": "quand-on-gueule-sans-savoir-pourquoi.mp3"
  },
  {
    "command": "quand-on-se-fache.mp3",
    "file": "quand-on-se-fache.mp3"
  },
  {
    "command": "quequette.mp3",
    "file": "quequette.mp3"
  },
  {
    "command": "qu-est-ce-dire-que-ceci.mp3",
    "file": "qu-est-ce-dire-que-ceci.mp3"
  },
  {
    "command": "quest-ce-que-cest-ce-nouveau-genre-seigneur-lancelot.mp3",
    "file": "quest-ce-que-cest-ce-nouveau-genre-seigneur-lancelot.mp3"
  },
  {
    "command": "qu-est-ce-que-cest-cette-tisane.mp3",
    "file": "qu-est-ce-que-cest-cette-tisane.mp3"
  },
  {
    "command": "qu-est-ce-que-je-suis-en-train-de-faire-avec-mon-doigt.mp3",
    "file": "qu-est-ce-que-je-suis-en-train-de-faire-avec-mon-doigt.mp3"
  },
  {
    "command": "quest-ce-que-vous-attendez-pour-la-couper.mp3",
    "file": "quest-ce-que-vous-attendez-pour-la-couper.mp3"
  },
  {
    "command": "quest-ce-que-vous-racontez-cest-pas-ca.mp3",
    "file": "quest-ce-que-vous-racontez-cest-pas-ca.mp3"
  },
  {
    "command": "quest-ce-que-vous-voulez-que-ca-me-foute.mp3",
    "file": "quest-ce-que-vous-voulez-que-ca-me-foute.mp3"
  },
  {
    "command": "qu-est-ce-que-vous-voulez-savoir-allez-vous-vous-magner-le-tronc-maintenant.mp3",
    "file": "qu-est-ce-que-vous-voulez-savoir-allez-vous-vous-magner-le-tronc-maintenant.mp3"
  },
  {
    "command": "qu-est-ce-qui-a-dautre-qui-pue-sinon.mp3",
    "file": "qu-est-ce-qui-a-dautre-qui-pue-sinon.mp3"
  },
  {
    "command": "quest-ce-qui-est-petit-et-marron.mp3",
    "file": "quest-ce-qui-est-petit-et-marron.mp3"
  },
  {
    "command": "quicher-tete.mp3",
    "file": "quicher-tete.mp3"
  },
  {
    "command": "quies.mp3",
    "file": "quies.mp3"
  },
  {
    "command": "quoi-bah-mon-cochon-vous-manquez-pas-de-cran.mp3",
    "file": "quoi-bah-mon-cochon-vous-manquez-pas-de-cran.mp3"
  },
  {
    "command": "quoi-mais-cest-un-scandale.mp3",
    "file": "quoi-mais-cest-un-scandale.mp3"
  },
  {
    "command": "rangez-moi-ca-debile-la-table-ronde-c-est-pas-une-fete-de-l-artisanat.mp3",
    "file": "rangez-moi-ca-debile-la-table-ronde-c-est-pas-une-fete-de-l-artisanat.mp3"
  },
  {
    "command": "ratisser-bouse-torcher-cul-poules.mp3",
    "file": "ratisser-bouse-torcher-cul-poules.mp3"
  },
  {
    "command": "regardez-moi-ce-petit-navet.mp3",
    "file": "regardez-moi-ce-petit-navet.mp3"
  },
  {
    "command": "regardez-moi-cette-meule.mp3",
    "file": "regardez-moi-cette-meule.mp3"
  },
  {
    "command": "remarquez-jai-un-pote-poissonier.mp3",
    "file": "remarquez-jai-un-pote-poissonier.mp3"
  },
  {
    "command": "remonte-ton-slibard.mp3",
    "file": "remonte-ton-slibard.mp3"
  },
  {
    "command": "ren-dez-vous-a-la-ta-verne-incognito.mp3",
    "file": "ren-dez-vous-a-la-ta-verne-incognito.mp3"
  },
  {
    "command": "restez-pas-plante-la-comme-un-cepe.mp3",
    "file": "restez-pas-plante-la-comme-un-cepe.mp3"
  },
  {
    "command": "rien-a-carer.mp3",
    "file": "rien-a-carer.mp3"
  },
  {
    "command": "rien-a-carrer.mp3",
    "file": "rien-a-carrer.mp3"
  },
  {
    "command": "rien-ca-fait-rien-cassez-vous.mp3",
    "file": "rien-ca-fait-rien-cassez-vous.mp3"
  },
  {
    "command": "rooo-bon-alors-on-fait-venir-les-poulettes-ou-quoi.mp3",
    "file": "rooo-bon-alors-on-fait-venir-les-poulettes-ou-quoi.mp3"
  },
  {
    "command": "salut-sire-je-trouve-quil-fait-beau-mais-encore-frais-mais-beau.mp3",
    "file": "salut-sire-je-trouve-quil-fait-beau-mais-encore-frais-mais-beau.mp3"
  },
  {
    "command": "sans-blague-ya-pas-dla-gourdasse.mp3",
    "file": "sans-blague-ya-pas-dla-gourdasse.mp3"
  },
  {
    "command": "sans-deconner-faut-pas-y-aller-demain.mp3",
    "file": "sans-deconner-faut-pas-y-aller-demain.mp3"
  },
  {
    "command": "sans-deconner.mp3",
    "file": "sans-deconner.mp3"
  },
  {
    "command": "sans-etre-totalement-repoussant-il-n-y-a-pas-de-quoi-bousculer-une-charette.mp3",
    "file": "sans-etre-totalement-repoussant-il-n-y-a-pas-de-quoi-bousculer-une-charette.mp3"
  },
  {
    "command": "scorpion-entoure-par-le-feu.mp3",
    "file": "scorpion-entoure-par-le-feu.mp3"
  },
  {
    "command": "seigneur-bohort-je-commence-a-en-avoir-plein-le-dos.mp3",
    "file": "seigneur-bohort-je-commence-a-en-avoir-plein-le-dos.mp3"
  },
  {
    "command": "signe-de-vouloir-discuter.mp3",
    "file": "signe-de-vouloir-discuter.mp3"
  },
  {
    "command": "si-je-reflechissais.mp3",
    "file": "si-je-reflechissais.mp3"
  },
  {
    "command": "si-j-etais-tombe-sur-un-faisant.mp3",
    "file": "si-j-etais-tombe-sur-un-faisant.mp3"
  },
  {
    "command": "sils-sont-equidistants-on-peut-reperer-le-dragon.mp3",
    "file": "sils-sont-equidistants-on-peut-reperer-le-dragon.mp3"
  },
  {
    "command": "simple-deduction-mon-oncle.mp3",
    "file": "simple-deduction-mon-oncle.mp3"
  },
  {
    "command": "sinon-ce-que-je-peux-vous-proposer-on-attache-le-condamne.mp3",
    "file": "sinon-ce-que-je-peux-vous-proposer-on-attache-le-condamne.mp3"
  },
  {
    "command": "si-on-peut-sen-farcir-un-cest-toujours-ca-de-pris-quoi.mp3",
    "file": "si-on-peut-sen-farcir-un-cest-toujours-ca-de-pris-quoi.mp3"
  },
  {
    "command": "sire-je-ne-suis-pas-homme.mp3",
    "file": "sire-je-ne-suis-pas-homme.mp3"
  },
  {
    "command": "sire-vous-me-flattez.mp3",
    "file": "sire-vous-me-flattez.mp3"
  },
  {
    "command": "si-vous-etes-vendeur.mp3",
    "file": "si-vous-etes-vendeur.mp3"
  },
  {
    "command": "sortez-vous-les-doigts-du-cul.mp3",
    "file": "sortez-vous-les-doigts-du-cul.mp3"
  },
  {
    "command": "soupcon-gros-nul.mp3",
    "file": "soupcon-gros-nul.mp3"
  },
  {
    "command": "sourire-comme-des-glands.mp3",
    "file": "sourire-comme-des-glands.mp3"
  },
  {
    "command": "soyez-souple-un-peu.mp3",
    "file": "soyez-souple-un-peu.mp3"
  },
  {
    "command": "stand-de-crepes.mp3",
    "file": "stand-de-crepes.mp3"
  },
  {
    "command": "sur-de-son-coup.mp3",
    "file": "sur-de-son-coup.mp3"
  },
  {
    "command": "tais-toi-ta-gueule-tais-toi.mp3",
    "file": "tais-toi-ta-gueule-tais-toi.mp3"
  },
  {
    "command": "tape-la-honte.mp3",
    "file": "tape-la-honte.mp3"
  },
  {
    "command": "tatan-elle-fait-des-flans.mp3",
    "file": "tatan-elle-fait-des-flans.mp3"
  },
  {
    "command": "tete-roupiller-couloir.mp3",
    "file": "tete-roupiller-couloir.mp3"
  },
  {
    "command": "toujours-se-plaindre-pequenauds.mp3",
    "file": "toujours-se-plaindre-pequenauds.mp3"
  },
  {
    "command": "tout-dans-le-furtif.mp3",
    "file": "tout-dans-le-furtif.mp3"
  },
  {
    "command": "tout-le-monde-s-en-branle-moi-le-premier.mp3",
    "file": "tout-le-monde-s-en-branle-moi-le-premier.mp3"
  },
  {
    "command": "tout-travail-merite-salaire.mp3",
    "file": "tout-travail-merite-salaire.mp3"
  },
  {
    "command": "tres-bien.mp3",
    "file": "tres-bien.mp3"
  },
  {
    "command": "tres-en-colere.mp3",
    "file": "tres-en-colere.mp3"
  },
  {
    "command": "tropgentil.mp3",
    "file": "tropgentil.mp3"
  },
  {
    "command": "tsoin-tsoin.mp3",
    "file": "tsoin-tsoin.mp3"
  },
  {
    "command": "tu-la-fermes-definitivement.mp3",
    "file": "tu-la-fermes-definitivement.mp3"
  },
  {
    "command": "tu-ne-tuera-point.mp3",
    "file": "tu-ne-tuera-point.mp3"
  },
  {
    "command": "un-bon-quart-dheure.mp3",
    "file": "un-bon-quart-dheure.mp3"
  },
  {
    "command": "une-claque-dans-le-museau-vous-repondez.mp3",
    "file": "une-claque-dans-le-museau-vous-repondez.mp3"
  },
  {
    "command": "une-fois-a-une-execution-je-m-approche-d-une-fille.mp3",
    "file": "une-fois-a-une-execution-je-m-approche-d-une-fille.mp3"
  },
  {
    "command": "un-genre-cake.mp3",
    "file": "un-genre-cake.mp3"
  },
  {
    "command": "un-jour-je-vais-lui-fumer-sa-gueule-a-ce-connard.mp3",
    "file": "un-jour-je-vais-lui-fumer-sa-gueule-a-ce-connard.mp3"
  },
  {
    "command": "un-plan-d-attaque-minute-au-poil-de-fion.mp3",
    "file": "un-plan-d-attaque-minute-au-poil-de-fion.mp3"
  },
  {
    "command": "urgan-lhomme-goujon.mp3",
    "file": "urgan-lhomme-goujon.mp3"
  },
  {
    "command": "venez-mouvriiir.mp3",
    "file": "venez-mouvriiir.mp3"
  },
  {
    "command": "venir-foutre-votre-merde.mp3",
    "file": "venir-foutre-votre-merde.mp3"
  },
  {
    "command": "voeux-de-pauvrete-jarrivais-pas-a-concilier.mp3",
    "file": "voeux-de-pauvrete-jarrivais-pas-a-concilier.mp3"
  },
  {
    "command": "voila-cest-pro.mp3",
    "file": "voila-cest-pro.mp3"
  },
  {
    "command": "voila-passez-moi-la-canne-a-peche.mp3",
    "file": "voila-passez-moi-la-canne-a-peche.mp3"
  },
  {
    "command": "votre-existence-est-merdique.mp3",
    "file": "votre-existence-est-merdique.mp3"
  },
  {
    "command": "vous-admettrez-que-vous-etes-hors-normes.mp3",
    "file": "vous-admettrez-que-vous-etes-hors-normes.mp3"
  },
  {
    "command": "vous-allez-fermer-vos-mouilles-oui.mp3",
    "file": "vous-allez-fermer-vos-mouilles-oui.mp3"
  },
  {
    "command": "vous-allez-me-foutre-le-camp-espece-de-con.mp3",
    "file": "vous-allez-me-foutre-le-camp-espece-de-con.mp3"
  },
  {
    "command": "vous-allez-me-lacher-les-noyaux-oui.mp3",
    "file": "vous-allez-me-lacher-les-noyaux-oui.mp3"
  },
  {
    "command": "vous-allez-me-montrer-ce-que-vous-avez-un-peu-dans-le-froc.mp3",
    "file": "vous-allez-me-montrer-ce-que-vous-avez-un-peu-dans-le-froc.mp3"
  },
  {
    "command": "vous-allez-me-promettre-de-pas-y-foutre-les-pieds.mp3",
    "file": "vous-allez-me-promettre-de-pas-y-foutre-les-pieds.mp3"
  },
  {
    "command": "vous-allez-pas-commencer-avec-vos-termes-pourris.mp3",
    "file": "vous-allez-pas-commencer-avec-vos-termes-pourris.mp3"
  },
  {
    "command": "vous-avez-pas-limpression-que-je-suis-dans-une-baignoire.mp3",
    "file": "vous-avez-pas-limpression-que-je-suis-dans-une-baignoire.mp3"
  },
  {
    "command": "vous-avez-pas-pris-le-temps-de-vous-habituer-au-fruit.mp3",
    "file": "vous-avez-pas-pris-le-temps-de-vous-habituer-au-fruit.mp3"
  },
  {
    "command": "vous-balader-avec-une-cuillere-a-soupe-ca-changerait-rien.mp3",
    "file": "vous-balader-avec-une-cuillere-a-soupe-ca-changerait-rien.mp3"
  },
  {
    "command": "vous-cassez-pas-la-nenette-pour-moi.mp3",
    "file": "vous-cassez-pas-la-nenette-pour-moi.mp3"
  },
  {
    "command": "vous-comprenez-le-principe.mp3",
    "file": "vous-comprenez-le-principe.mp3"
  },
  {
    "command": "vous-deconnez.mp3",
    "file": "vous-deconnez.mp3"
  },
  {
    "command": "vous-devriez-commencer-par-organiser-le-merdier-que-vous-avez-la-dedans.mp3",
    "file": "vous-devriez-commencer-par-organiser-le-merdier-que-vous-avez-la-dedans.mp3"
  },
  {
    "command": "vous-en-mettez-pas-trop.mp3",
    "file": "vous-en-mettez-pas-trop.mp3"
  },
  {
    "command": "vous-etes-completement-con.mp3",
    "file": "vous-etes-completement-con.mp3"
  },
  {
    "command": "vous-etes-des-damnes.mp3",
    "file": "vous-etes-des-damnes.mp3"
  },
  {
    "command": "vous-etes-une-gigantesque-tarlouze.mp3",
    "file": "vous-etes-une-gigantesque-tarlouze.mp3"
  },
  {
    "command": "vous-etes-un-gros-nul.mp3",
    "file": "vous-etes-un-gros-nul.mp3"
  },
  {
    "command": "vous-faites-pas-la-gueule-la.mp3",
    "file": "vous-faites-pas-la-gueule-la.mp3"
  },
  {
    "command": "vous-la-crachez-votre-pastille.mp3",
    "file": "vous-la-crachez-votre-pastille.mp3"
  },
  {
    "command": "vous-laissez-pas-embobiner-ils-cherchent-a-vous-rembobiner.mp3",
    "file": "vous-laissez-pas-embobiner-ils-cherchent-a-vous-rembobiner.mp3"
  },
  {
    "command": "vous-me-dites-il-faut-quelque-chose-de-festif.mp3",
    "file": "vous-me-dites-il-faut-quelque-chose-de-festif.mp3"
  },
  {
    "command": "vous-me-prenez-vraiment-pour-une-conne.mp3",
    "file": "vous-me-prenez-vraiment-pour-une-conne.mp3"
  },
  {
    "command": "vous-nous-utilisez-bon-gre-mal-gre-pour-arriver-sur-la-fin.mp3",
    "file": "vous-nous-utilisez-bon-gre-mal-gre-pour-arriver-sur-la-fin.mp3"
  },
  {
    "command": "vous-pouvez-aller-vous-gratter.mp3",
    "file": "vous-pouvez-aller-vous-gratter.mp3"
  },
  {
    "command": "vous-rigolez-jespere.mp3",
    "file": "vous-rigolez-jespere.mp3"
  },
  {
    "command": "vous-savez-cest-pas-parce-quun-vieux-moisi.mp3",
    "file": "vous-savez-cest-pas-parce-quun-vieux-moisi.mp3"
  },
  {
    "command": "vous-voulez-que-je-vous-degage-la-nuque-a-la-serpette.mp3",
    "file": "vous-voulez-que-je-vous-degage-la-nuque-a-la-serpette.mp3"
  },
  {
    "command": "vous-vous-devriez-arreter-de-sourire.mp3",
    "file": "vous-vous-devriez-arreter-de-sourire.mp3"
  },
  {
    "command": "vraiment-impressionnant.mp3",
    "file": "vraiment-impressionnant.mp3"
  },
  {
    "command": "wooouuuhouhouhou-c-est-mortel.mp3",
    "file": "wooouuuhouhouhou-c-est-mortel.mp3"
  },
  {
    "command": "ya-pas-de-mal.mp3",
    "file": "ya-pas-de-mal.mp3"
  },
  {
    "command": "ya-pas-un-pigeon-pour-envoyer-un-message.mp3",
    "file": "ya-pas-un-pigeon-pour-envoyer-un-message.mp3"
  },
  {
    "command": "zut-la.mp3",
    "file": "zut-la.mp3"
  }
]
