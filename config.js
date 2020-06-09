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
    "command": "2_3_poils_de_Q", 
    "file": "./sounds/2_3_poils_de_Q.mp3"
  }, 
  {
    "command": "A-titre-purement-informatif", 
    "file": "./sounds/A-titre-purement-informatif.mp3"
  }, 
  {
    "command": "Comment_ca_on_bute_Karadoc", 
    "file": "./sounds/Comment_ca_on_bute_Karadoc.mp3"
  }, 
  {
    "command": "Homme-sans-metier", 
    "file": "./sounds/Homme-sans-metier.mp3"
  }, 
  {
    "command": "Les-petits-pedestres-dont-un-au-lion", 
    "file": "./sounds/Les-petits-pedestres-dont-un-au-lion.mp3"
  }, 
  {
    "command": "Les-petits-pedestres", 
    "file": "./sounds/Les-petits-pedestres.mp3"
  }, 
  {
    "command": "Ren_dez_vous_a_la_ta_verne_incognito", 
    "file": "./sounds/Ren_dez_vous_a_la_ta_verne_incognito.mp3"
  }, 
  {
    "command": "Soyez-souple-un-peu", 
    "file": "./sounds/Soyez-souple-un-peu.mp3"
  }, 
  {
    "command": "Tout-travail-merite-salaire", 
    "file": "./sounds/Tout-travail-merite-salaire.mp3"
  }, 
  {
    "command": "a_kadoc", 
    "file": "./sounds/a_kadoc.mp3"
  }, 
  {
    "command": "a_la_volette1", 
    "file": "./sounds/a_la_volette1.mp3"
  }, 
  {
    "command": "a_moi", 
    "file": "./sounds/a_moi.mp3"
  }, 
  {
    "command": "a_moi_a_lassassin", 
    "file": "./sounds/a_moi_a_lassassin.mp3"
  }, 
  {
    "command": "a_mon_epoque_ca_se_faisait_pas", 
    "file": "./sounds/a_mon_epoque_ca_se_faisait_pas.mp3"
  }, 
  {
    "command": "a_plus_tard", 
    "file": "./sounds/a_plus_tard.mp3"
  }, 
  {
    "command": "a_roulettes", 
    "file": "./sounds/a_roulettes.mp3"
  }, 
  {
    "command": "a_voui_vous_avez_raison", 
    "file": "./sounds/a_voui_vous_avez_raison.mp3"
  }, 
  {
    "command": "ah-bah-cest-sur-on-se-marre", 
    "file": "./sounds/ah-bah-cest-sur-on-se-marre.mp3"
  }, 
  {
    "command": "ah-bah-voila-cherchez-pas-cest-hyper-flippant", 
    "file": "./sounds/ah-bah-voila-cherchez-pas-cest-hyper-flippant.mp3"
  }, 
  {
    "command": "ah-ca-quand-on-connait-pas-il-faut-se-mefier-avec-les-champignons", 
    "file": "./sounds/ah-ca-quand-on-connait-pas-il-faut-se-mefier-avec-les-champignons.mp3"
  }, 
  {
    "command": "ah-cest-regle-hein-je-confirme", 
    "file": "./sounds/ah-cest-regle-hein-je-confirme.mp3"
  }, 
  {
    "command": "ah-non-vous-allez-pas-bouder", 
    "file": "./sounds/ah-non-vous-allez-pas-bouder.mp3"
  }, 
  {
    "command": "ah-ouais-vous-madressez-carrement-plus-la-parole-en-fait", 
    "file": "./sounds/ah-ouais-vous-madressez-carrement-plus-la-parole-en-fait.mp3"
  }, 
  {
    "command": "ah-putain-ouais-en-fait-vous-mavez-fait-lever-pour-rien", 
    "file": "./sounds/ah-putain-ouais-en-fait-vous-mavez-fait-lever-pour-rien.mp3"
  }, 
  {
    "command": "ah-une-vache-pres-cest-pas-une-science-exacte", 
    "file": "./sounds/ah-une-vache-pres-cest-pas-une-science-exacte.mp3"
  }, 
  {
    "command": "ah__enfin_vous_voila_mon_ami__mais_que_se_passe_t_il_jentends_crier", 
    "file": "./sounds/ah__enfin_vous_voila_mon_ami__mais_que_se_passe_t_il_jentends_crier.mp3"
  }, 
  {
    "command": "ah_ah_mais_vous_etes_marteau_et_regardez_ca_ca_pisse_le_sang", 
    "file": "./sounds/ah_ah_mais_vous_etes_marteau_et_regardez_ca_ca_pisse_le_sang.mp3"
  }, 
  {
    "command": "ah_bah_alors_la_je_les_attends_les_mecs", 
    "file": "./sounds/ah_bah_alors_la_je_les_attends_les_mecs.mp3"
  }, 
  {
    "command": "ah_bah_ouais_mais_apres_il_faut_un_peu_de_technique", 
    "file": "./sounds/ah_bah_ouais_mais_apres_il_faut_un_peu_de_technique.mp3"
  }, 
  {
    "command": "ah_bravo_bah_vous_parlez_d_un_hero", 
    "file": "./sounds/ah_bravo_bah_vous_parlez_d_un_hero.mp3"
  }, 
  {
    "command": "ah_cest_ca", 
    "file": "./sounds/ah_cest_ca.mp3"
  }, 
  {
    "command": "ah_le_printemps_on_crame_des_mecs", 
    "file": "./sounds/ah_le_printemps_on_crame_des_mecs.mp3"
  }, 
  {
    "command": "ah_mais_arretez_de_gueuler_comme_un_con", 
    "file": "./sounds/ah_mais_arretez_de_gueuler_comme_un_con.mp3"
  }, 
  {
    "command": "ah_nan_mais_quand_on_est_pas_habitue_c_est_drolement_impressionnant_la_magie", 
    "file": "./sounds/ah_nan_mais_quand_on_est_pas_habitue_c_est_drolement_impressionnant_la_magie.mp3"
  }, 
  {
    "command": "ah_non_ca_c_est_que_nous", 
    "file": "./sounds/ah_non_ca_c_est_que_nous.mp3"
  }, 
  {
    "command": "ah_non_la_aujourd_hui_ca_passera_pas", 
    "file": "./sounds/ah_non_la_aujourd_hui_ca_passera_pas.mp3"
  }, 
  {
    "command": "ah_ouais_je_l_ai_fait_trop_fulgurant_la_ca_va", 
    "file": "./sounds/ah_ouais_je_l_ai_fait_trop_fulgurant_la_ca_va.mp3"
  }, 
  {
    "command": "ah_ouais_vous_seriez_une_sorte_de_bi_taupe_en_fait", 
    "file": "./sounds/ah_ouais_vous_seriez_une_sorte_de_bi_taupe_en_fait.mp3"
  }, 
  {
    "command": "ah_oui_bravo_une_belle_lecon_de_sport", 
    "file": "./sounds/ah_oui_bravo_une_belle_lecon_de_sport.mp3"
  }, 
  {
    "command": "ah_parce_que_c_est_la_seule_alternative_que_vous_me_proposez", 
    "file": "./sounds/ah_parce_que_c_est_la_seule_alternative_que_vous_me_proposez.mp3"
  }, 
  {
    "command": "ah_qu_est_ce_que_vous_voulez_mon_petit_bohort", 
    "file": "./sounds/ah_qu_est_ce_que_vous_voulez_mon_petit_bohort.mp3"
  }, 
  {
    "command": "ah_si_moi_j_irai_me_recoucher_avant_de_prendre_un_pain", 
    "file": "./sounds/ah_si_moi_j_irai_me_recoucher_avant_de_prendre_un_pain.mp3"
  }, 
  {
    "command": "allez-bon-dieu-mais-magnez-vous-ca-pue-la-dedans", 
    "file": "./sounds/allez-bon-dieu-mais-magnez-vous-ca-pue-la-dedans.mp3"
  }, 
  {
    "command": "allez-en-garde-espece-de-petite-couille-molle", 
    "file": "./sounds/allez-en-garde-espece-de-petite-couille-molle.mp3"
  }, 
  {
    "command": "allez-quoi-on-a-besoin-dune-potion", 
    "file": "./sounds/allez-quoi-on-a-besoin-dune-potion.mp3"
  }, 
  {
    "command": "allez-y-vous", 
    "file": "./sounds/allez-y-vous.mp3"
  }, 
  {
    "command": "allez_boire_un_coup", 
    "file": "./sounds/allez_boire_un_coup.mp3"
  }, 
  {
    "command": "allez_vous_preparer_mousaillon_on_largue_les_amarres_dans_une_heure", 
    "file": "./sounds/allez_vous_preparer_mousaillon_on_largue_les_amarres_dans_une_heure.mp3"
  }, 
  {
    "command": "allez_vous_reposer_vous_l_avez_bien_merite", 
    "file": "./sounds/allez_vous_reposer_vous_l_avez_bien_merite.mp3"
  }, 
  {
    "command": "alors-oisif-obese-autant-dire-des-gros-cons", 
    "file": "./sounds/alors-oisif-obese-autant-dire-des-gros-cons.mp3"
  }, 
  {
    "command": "alors__a_qui_cest_quelle_est_morte_la_va_vache", 
    "file": "./sounds/alors__a_qui_cest_quelle_est_morte_la_va_vache.mp3"
  }, 
  {
    "command": "alors_ca_vient_ptite_bite", 
    "file": "./sounds/alors_ca_vient_ptite_bite.mp3"
  }, 
  {
    "command": "alors_des_qu_il_s_agit_d_aller_se_dorer_les_miches_en_armorique", 
    "file": "./sounds/alors_des_qu_il_s_agit_d_aller_se_dorer_les_miches_en_armorique.mp3"
  }, 
  {
    "command": "alors_le_ratichon_on_a_un_ptit_creux", 
    "file": "./sounds/alors_le_ratichon_on_a_un_ptit_creux.mp3"
  }, 
  {
    "command": "alors_moi_jai_un_petit_probleme__jai_pas_pige_un_broc_de_ce_que_vous_bavez", 
    "file": "./sounds/alors_moi_jai_un_petit_probleme__jai_pas_pige_un_broc_de_ce_que_vous_bavez.mp3"
  }, 
  {
    "command": "alors_si_j_ai_bien_resume_le_truc_vous_allez_creuser_trois_pieds_et_demi_sur_toute_la_bretagne", 
    "file": "./sounds/alors_si_j_ai_bien_resume_le_truc_vous_allez_creuser_trois_pieds_et_demi_sur_toute_la_bretagne.mp3"
  }, 
  {
    "command": "animaux_de_la_foret", 
    "file": "./sounds/animaux_de_la_foret.mp3"
  }, 
  {
    "command": "apres_pour_le_detail_je_sais_pas", 
    "file": "./sounds/apres_pour_le_detail_je_sais_pas.mp3"
  }, 
  {
    "command": "arretez-cest-pour-deconner", 
    "file": "./sounds/arretez-cest-pour-deconner.mp3"
  }, 
  {
    "command": "arretez_de_parler_aux_gens", 
    "file": "./sounds/arretez_de_parler_aux_gens.mp3"
  }, 
  {
    "command": "arretez_immediatement_de_me_prendre_pour_une_truite", 
    "file": "./sounds/arretez_immediatement_de_me_prendre_pour_une_truite.mp3"
  }, 
  {
    "command": "arthour", 
    "file": "./sounds/arthour.mp3"
  }, 
  {
    "command": "assiette_fromage", 
    "file": "./sounds/assiette_fromage.mp3"
  }, 
  {
    "command": "attendez-que-je-me-suis-jamais-quoi", 
    "file": "./sounds/attendez-que-je-me-suis-jamais-quoi.mp3"
  }, 
  {
    "command": "attendez_il_faut_que_ca_soit_vrai_tout_ce_qu_on_dit_la", 
    "file": "./sounds/attendez_il_faut_que_ca_soit_vrai_tout_ce_qu_on_dit_la.mp3"
  }, 
  {
    "command": "attention_attention_a_un_moment_il_y_a_des_granges_qui_vont_se_mettre_a_flamber_il_faudra_pas_demander_d_ou_sa_vient", 
    "file": "./sounds/attention_attention_a_un_moment_il_y_a_des_granges_qui_vont_se_mettre_a_flamber_il_faudra_pas_demander_d_ou_sa_vient.mp3"
  }, 
  {
    "command": "au_bout_dun_moment_on_a_prefere_plus_rien_dire", 
    "file": "./sounds/au_bout_dun_moment_on_a_prefere_plus_rien_dire.mp3"
  }, 
  {
    "command": "au_bucher_demon_expie_tes_fautes", 
    "file": "./sounds/au_bucher_demon_expie_tes_fautes.mp3"
  }, 
  {
    "command": "au_gros_sel_qu_est_ce_que_c_est_ces_conneries_vous_me_prenez_pour_une_epaule_d_agneau", 
    "file": "./sounds/au_gros_sel_qu_est_ce_que_c_est_ces_conneries_vous_me_prenez_pour_une_epaule_d_agneau.mp3"
  }, 
  {
    "command": "ave_cesar", 
    "file": "./sounds/ave_cesar.mp3"
  }, 
  {
    "command": "avec_sa_couille", 
    "file": "./sounds/avec_sa_couille.mp3"
  }, 
  {
    "command": "avez_de_la_chance", 
    "file": "./sounds/avez_de_la_chance.mp3"
  }, 
  {
    "command": "bah-alors-884-charrettes-de-bouses", 
    "file": "./sounds/bah-alors-884-charrettes-de-bouses.mp3"
  }, 
  {
    "command": "bah-ca-depend-a-partir-de-quand", 
    "file": "./sounds/bah-ca-depend-a-partir-de-quand.mp3"
  }, 
  {
    "command": "bah-on-a-pas-de-technique-mais-cest-comme-tout", 
    "file": "./sounds/bah-on-a-pas-de-technique-mais-cest-comme-tout.mp3"
  }, 
  {
    "command": "bah_je_sais_pas_me_lacher_la_grappe_par_exemple", 
    "file": "./sounds/bah_je_sais_pas_me_lacher_la_grappe_par_exemple.mp3"
  }, 
  {
    "command": "bah_si_il_n_y_avait_que_les_oiseaux_elle_est_a_moitie_givree_de_toute_facon_on_ne_peut_pas_tout_relever_non_plus", 
    "file": "./sounds/bah_si_il_n_y_avait_que_les_oiseaux_elle_est_a_moitie_givree_de_toute_facon_on_ne_peut_pas_tout_relever_non_plus.mp3"
  }, 
  {
    "command": "bataille_de_fions", 
    "file": "./sounds/bataille_de_fions.mp3"
  }, 
  {
    "command": "bateau-nage", 
    "file": "./sounds/bateau-nage.mp3"
  }, 
  {
    "command": "ben_nous_on_a_cru_que_cetait_la_pour_faire_joli", 
    "file": "./sounds/ben_nous_on_a_cru_que_cetait_la_pour_faire_joli.mp3"
  }, 
  {
    "command": "ben_oui_cest_une_rime_triple__blanche_et_seche_poitrine_et_prairie_de_notre_enfance", 
    "file": "./sounds/ben_oui_cest_une_rime_triple__blanche_et_seche_poitrine_et_prairie_de_notre_enfance.mp3"
  }, 
  {
    "command": "bibelots-mongol-parthenon", 
    "file": "./sounds/bibelots-mongol-parthenon.mp3"
  }, 
  {
    "command": "bien_manger_cest_important", 
    "file": "./sounds/bien_manger_cest_important.mp3"
  }, 
  {
    "command": "biensur-ils-ont-que-ca-a-foutre-les-paysans", 
    "file": "./sounds/biensur-ils-ont-que-ca-a-foutre-les-paysans.mp3"
  }, 
  {
    "command": "blaireau-peignecul-tarlouze", 
    "file": "./sounds/blaireau-peignecul-tarlouze.mp3"
  }, 
  {
    "command": "bled-natal-fion", 
    "file": "./sounds/bled-natal-fion.mp3"
  }, 
  {
    "command": "bohort_arreter_de_vous_vexer_sans_arret_comme_une_grosse_dinde", 
    "file": "./sounds/bohort_arreter_de_vous_vexer_sans_arret_comme_une_grosse_dinde.mp3"
  }, 
  {
    "command": "bon-alors-combien-il-faut-que-casque-pour-la-fete-aux-pecores", 
    "file": "./sounds/bon-alors-combien-il-faut-que-casque-pour-la-fete-aux-pecores.mp3"
  }, 
  {
    "command": "bon-de-toute-facon", 
    "file": "./sounds/bon-de-toute-facon.mp3"
  }, 
  {
    "command": "bon_bah_aller_on_demarre_et_ouvrez_les_echauguettes", 
    "file": "./sounds/bon_bah_aller_on_demarre_et_ouvrez_les_echauguettes.mp3"
  }, 
  {
    "command": "bon_bah_ca_va_on_plaisante", 
    "file": "./sounds/bon_bah_ca_va_on_plaisante.mp3"
  }, 
  {
    "command": "bon_bah_je_vais_voir_ce_que_je_peux_faire", 
    "file": "./sounds/bon_bah_je_vais_voir_ce_que_je_peux_faire.mp3"
  }, 
  {
    "command": "bon_ben_revolte", 
    "file": "./sounds/bon_ben_revolte.mp3"
  }, 
  {
    "command": "bon_cassez_vous", 
    "file": "./sounds/bon_cassez_vous.mp3"
  }, 
  {
    "command": "bon_je_la_suis_parce_que_je_suis_tres_amoureux", 
    "file": "./sounds/bon_je_la_suis_parce_que_je_suis_tres_amoureux.mp3"
  }, 
  {
    "command": "bon_je_peux_pas_penser_a_tout_la", 
    "file": "./sounds/bon_je_peux_pas_penser_a_tout_la.mp3"
  }, 
  {
    "command": "bonjour_la_pedagogie", 
    "file": "./sounds/bonjour_la_pedagogie.mp3"
  }, 
  {
    "command": "boule-de-feu-boule-de-feu", 
    "file": "./sounds/boule-de-feu-boule-de-feu.mp3"
  }, 
  {
    "command": "bucher1", 
    "file": "./sounds/bucher1.mp3"
  }, 
  {
    "command": "bucher2", 
    "file": "./sounds/bucher2.mp3"
  }, 
  {
    "command": "bucher3", 
    "file": "./sounds/bucher3.mp3"
  }, 
  {
    "command": "buffet_a_vaisselle", 
    "file": "./sounds/buffet_a_vaisselle.mp3"
  }, 
  {
    "command": "burgonde_ou_anglais", 
    "file": "./sounds/burgonde_ou_anglais.mp3"
  }, 
  {
    "command": "c-est-les-autres-qui-sont-cons", 
    "file": "./sounds/c-est-les-autres-qui-sont-cons.mp3"
  }, 
  {
    "command": "c_est_cotelette_que_vous_comprenez_pas", 
    "file": "./sounds/c_est_cotelette_que_vous_comprenez_pas.mp3"
  }, 
  {
    "command": "c_est_maintenant_quil_faut_se_secouer", 
    "file": "./sounds/c_est_maintenant_quil_faut_se_secouer.mp3"
  }, 
  {
    "command": "c_est_pas_parce_qu_ils_ont_trahi_que_c_est_plus_des_allies", 
    "file": "./sounds/c_est_pas_parce_qu_ils_ont_trahi_que_c_est_plus_des_allies.mp3"
  }, 
  {
    "command": "ca-ca-doit-etre-du-code-parce-que-ca-veut-rien-dire", 
    "file": "./sounds/ca-ca-doit-etre-du-code-parce-que-ca-veut-rien-dire.mp3"
  }, 
  {
    "command": "ca_change_tout", 
    "file": "./sounds/ca_change_tout.mp3"
  }, 
  {
    "command": "ca_me_fait_gerber", 
    "file": "./sounds/ca_me_fait_gerber.mp3"
  }, 
  {
    "command": "ca_me_ferait_mal", 
    "file": "./sounds/ca_me_ferait_mal.mp3"
  }, 
  {
    "command": "ca_me_plait_qu_a_moitie", 
    "file": "./sounds/ca_me_plait_qu_a_moitie.mp3"
  }, 
  {
    "command": "ca_va_encore_faire_des_discussions_a_rallonge", 
    "file": "./sounds/ca_va_encore_faire_des_discussions_a_rallonge.mp3"
  }, 
  {
    "command": "ca_va_oui_ca_va_vous_etes_content", 
    "file": "./sounds/ca_va_oui_ca_va_vous_etes_content.mp3"
  }, 
  {
    "command": "ca_va_si_faut_sonner_lalerte_vous_pouvez_bien_attendre_que_je_revienne_nan", 
    "file": "./sounds/ca_va_si_faut_sonner_lalerte_vous_pouvez_bien_attendre_que_je_revienne_nan.mp3"
  }, 
  {
    "command": "ca_va_un_peu_trop_vite_pour_moi", 
    "file": "./sounds/ca_va_un_peu_trop_vite_pour_moi.mp3"
  }, 
  {
    "command": "ca_vous_ennuie_si_je_vomis", 
    "file": "./sounds/ca_vous_ennuie_si_je_vomis.mp3"
  }, 
  {
    "command": "ca_vous_fait_pas_mal_a_la_tete_de_glandouiller", 
    "file": "./sounds/ca_vous_fait_pas_mal_a_la_tete_de_glandouiller.mp3"
  }, 
  {
    "command": "ca_vous_regarde_pas_cest_secret_ok", 
    "file": "./sounds/ca_vous_regarde_pas_cest_secret_ok.mp3"
  }, 
  {
    "command": "casuffit", 
    "file": "./sounds/casuffit.mp3"
  }, 
  {
    "command": "catastrophe", 
    "file": "./sounds/catastrophe.mp3"
  }, 
  {
    "command": "ce-serait-hyper", 
    "file": "./sounds/ce-serait-hyper.mp3"
  }, 
  {
    "command": "centurion_caius_camilus_lulululu", 
    "file": "./sounds/centurion_caius_camilus_lulululu.mp3"
  }, 
  {
    "command": "cest-de-la-daube", 
    "file": "./sounds/cest-de-la-daube.mp3"
  }, 
  {
    "command": "cest-de-la-merde-merci-messieurs", 
    "file": "./sounds/cest-de-la-merde-merci-messieurs.mp3"
  }, 
  {
    "command": "cest-de-la-merde", 
    "file": "./sounds/cest-de-la-merde.mp3"
  }, 
  {
    "command": "cest-l-autre-con-avec-ses-pinceaux", 
    "file": "./sounds/cest-l-autre-con-avec-ses-pinceaux.mp3"
  }, 
  {
    "command": "cest-marrant-les-petits-bouts-de-fromage-par-terre", 
    "file": "./sounds/cest-marrant-les-petits-bouts-de-fromage-par-terre.mp3"
  }, 
  {
    "command": "cest-pas-du-burgonde-ca", 
    "file": "./sounds/cest-pas-du-burgonde-ca.mp3"
  }, 
  {
    "command": "cest-pas-du-tout-mon-anniversaire", 
    "file": "./sounds/cest-pas-du-tout-mon-anniversaire.mp3"
  }, 
  {
    "command": "cest-personne-un-connard", 
    "file": "./sounds/cest-personne-un-connard.mp3"
  }, 
  {
    "command": "cest-pour-voir-si-vous-avez-un-don", 
    "file": "./sounds/cest-pour-voir-si-vous-avez-un-don.mp3"
  }, 
  {
    "command": "cest-un-scandale", 
    "file": "./sounds/cest-un-scandale.mp3"
  }, 
  {
    "command": "cest-une-blague", 
    "file": "./sounds/cest-une-blague.mp3"
  }, 
  {
    "command": "cest_beau_quand_meme", 
    "file": "./sounds/cest_beau_quand_meme.mp3"
  }, 
  {
    "command": "cest_bien_fait", 
    "file": "./sounds/cest_bien_fait.mp3"
  }, 
  {
    "command": "cest_bien_quon_reste_un_peu_dehors", 
    "file": "./sounds/cest_bien_quon_reste_un_peu_dehors.mp3"
  }, 
  {
    "command": "cest_chaud_quand_meme", 
    "file": "./sounds/cest_chaud_quand_meme.mp3"
  }, 
  {
    "command": "cest_de_la_merde", 
    "file": "./sounds/cest_de_la_merde.mp3"
  }, 
  {
    "command": "cest_debile_cette_histoire", 
    "file": "./sounds/cest_debile_cette_histoire.mp3"
  }, 
  {
    "command": "cest_dur", 
    "file": "./sounds/cest_dur.mp3"
  }, 
  {
    "command": "cest_facile_on_peut_jouer_soit_avec_des_haricots_soit_avec_des_lentilles", 
    "file": "./sounds/cest_facile_on_peut_jouer_soit_avec_des_haricots_soit_avec_des_lentilles.mp3"
  }, 
  {
    "command": "cest_honteux", 
    "file": "./sounds/cest_honteux.mp3"
  }, 
  {
    "command": "cest_interessant", 
    "file": "./sounds/cest_interessant.mp3"
  }, 
  {
    "command": "cest_lanniversaire_dans_tous_les_recoins", 
    "file": "./sounds/cest_lanniversaire_dans_tous_les_recoins.mp3"
  }, 
  {
    "command": "cest_le_genre_dendroit_ou_il_faut_parler_fort", 
    "file": "./sounds/cest_le_genre_dendroit_ou_il_faut_parler_fort.mp3"
  }, 
  {
    "command": "cest_le_rendez_vous_des_glandus_la_ou_quoi", 
    "file": "./sounds/cest_le_rendez_vous_des_glandus_la_ou_quoi.mp3"
  }, 
  {
    "command": "cest_moi_ou_il_y_a_une_ambiance_de_merde", 
    "file": "./sounds/cest_moi_ou_il_y_a_une_ambiance_de_merde.mp3"
  }, 
  {
    "command": "cest_pas_des_fleches", 
    "file": "./sounds/cest_pas_des_fleches.mp3"
  }, 
  {
    "command": "cest_pas_faux1", 
    "file": "./sounds/cest_pas_faux1.mp3"
  }, 
  {
    "command": "cest_pas_faux2", 
    "file": "./sounds/cest_pas_faux2.mp3"
  }, 
  {
    "command": "cest_pas_jo_le_rigolo", 
    "file": "./sounds/cest_pas_jo_le_rigolo.mp3"
  }, 
  {
    "command": "cest_pas_une_sinecure", 
    "file": "./sounds/cest_pas_une_sinecure.mp3"
  }, 
  {
    "command": "cest_plus_filiforme", 
    "file": "./sounds/cest_plus_filiforme.mp3"
  }, 
  {
    "command": "cest_prodigieux", 
    "file": "./sounds/cest_prodigieux.mp3"
  }, 
  {
    "command": "cest_que_cest_pas_une_blague", 
    "file": "./sounds/cest_que_cest_pas_une_blague.mp3"
  }, 
  {
    "command": "cest_qui_tout_ces_cons", 
    "file": "./sounds/cest_qui_tout_ces_cons.mp3"
  }, 
  {
    "command": "cest_tellement_facile_que_je_vais_peut_etre_systematise_le_processus", 
    "file": "./sounds/cest_tellement_facile_que_je_vais_peut_etre_systematise_le_processus.mp3"
  }, 
  {
    "command": "cest_toujours_un_peu_delicat_de_parler_damour_aux_cons", 
    "file": "./sounds/cest_toujours_un_peu_delicat_de_parler_damour_aux_cons.mp3"
  }, 
  {
    "command": "cest_une_catastrophe_souffle", 
    "file": "./sounds/cest_une_catastrophe_souffle.mp3"
  }, 
  {
    "command": "cest_vrai_quelle_reste", 
    "file": "./sounds/cest_vrai_quelle_reste.mp3"
  }, 
  {
    "command": "chaque_fois_que_je_vais_a_un_balloche_je_picole_je_discute", 
    "file": "./sounds/chaque_fois_que_je_vais_a_un_balloche_je_picole_je_discute.mp3"
  }, 
  {
    "command": "charmant", 
    "file": "./sounds/charmant.mp3"
  }, 
  {
    "command": "chevalierisation", 
    "file": "./sounds/chevalierisation.mp3"
  }, 
  {
    "command": "chui_un_marteau_moi", 
    "file": "./sounds/chui_un_marteau_moi.mp3"
  }, 
  {
    "command": "comme-la-mare-aux-canards", 
    "file": "./sounds/comme-la-mare-aux-canards.mp3"
  }, 
  {
    "command": "commencez_pas_a_me_faire_chier", 
    "file": "./sounds/commencez_pas_a_me_faire_chier.mp3"
  }, 
  {
    "command": "comment", 
    "file": "./sounds/comment.mp3"
  }, 
  {
    "command": "comment_peut_on_arriver_a_un_grade_aussi_eleve", 
    "file": "./sounds/comment_peut_on_arriver_a_un_grade_aussi_eleve.mp3"
  }, 
  {
    "command": "compote", 
    "file": "./sounds/compote.mp3"
  }, 
  {
    "command": "considerer_que_je_suis_officiellement_cul_nu", 
    "file": "./sounds/considerer_que_je_suis_officiellement_cul_nu.mp3"
  }, 
  {
    "command": "coup_de_beche", 
    "file": "./sounds/coup_de_beche.mp3"
  }, 
  {
    "command": "coup_de_pied_aux_poules", 
    "file": "./sounds/coup_de_pied_aux_poules.mp3"
  }, 
  {
    "command": "crame_ta_famille", 
    "file": "./sounds/crame_ta_famille.mp3"
  }, 
  {
    "command": "cuillere", 
    "file": "./sounds/cuillere.mp3"
  }, 
  {
    "command": "cuillere_2", 
    "file": "./sounds/cuillere_2.mp3"
  }, 
  {
    "command": "cuit_les_boules", 
    "file": "./sounds/cuit_les_boules.mp3"
  }, 
  {
    "command": "dans_la_vie", 
    "file": "./sounds/dans_la_vie.mp3"
  }, 
  {
    "command": "dans_trois_jours_cest_les_vacances", 
    "file": "./sounds/dans_trois_jours_cest_les_vacances.mp3"
  }, 
  {
    "command": "dans_trois_jours_ma_tata_elle_menmene_a_la_mer_pour_me_noyer", 
    "file": "./sounds/dans_trois_jours_ma_tata_elle_menmene_a_la_mer_pour_me_noyer.mp3"
  }, 
  {
    "command": "de-toute-facon-les-reunions-cest-2-fois-par-mois", 
    "file": "./sounds/de-toute-facon-les-reunions-cest-2-fois-par-mois.mp3"
  }, 
  {
    "command": "de_quoi_desole_excusez_moi_j_ecoutais_pas", 
    "file": "./sounds/de_quoi_desole_excusez_moi_j_ecoutais_pas.mp3"
  }, 
  {
    "command": "de_tout_facon_on_dit_le_nord_selon_comment_on_est_tourne_ca_change_tout", 
    "file": "./sounds/de_tout_facon_on_dit_le_nord_selon_comment_on_est_tourne_ca_change_tout.mp3"
  }, 
  {
    "command": "decarre-tes-troupes-de-chez-moi-ou-je-crame-ton-pays", 
    "file": "./sounds/decarre-tes-troupes-de-chez-moi-ou-je-crame-ton-pays.mp3"
  }, 
  {
    "command": "degaine-crevette-merou", 
    "file": "./sounds/degaine-crevette-merou.mp3"
  }, 
  {
    "command": "demain-cest-demain", 
    "file": "./sounds/demain-cest-demain.mp3"
  }, 
  {
    "command": "demi_journee_vous_attend", 
    "file": "./sounds/demi_journee_vous_attend.mp3"
  }, 
  {
    "command": "des-betes-sauvages-que-je-vais-recuperer", 
    "file": "./sounds/des-betes-sauvages-que-je-vais-recuperer.mp3"
  }, 
  {
    "command": "des_pedales_ils_disent_sur_le_message", 
    "file": "./sounds/des_pedales_ils_disent_sur_le_message.mp3"
  }, 
  {
    "command": "des_vetements", 
    "file": "./sounds/des_vetements.mp3"
  }, 
  {
    "command": "deux_trous_du_cul_soient_plus_efficaces_qu_un_seul", 
    "file": "./sounds/deux_trous_du_cul_soient_plus_efficaces_qu_un_seul.mp3"
  }, 
  {
    "command": "difference_concrete_avec_des_briques", 
    "file": "./sounds/difference_concrete_avec_des_briques.mp3"
  }, 
  {
    "command": "dis_donc_machine_si_tu_allais_voir_a_la_table_du_fond_si_on_y_ait", 
    "file": "./sounds/dis_donc_machine_si_tu_allais_voir_a_la_table_du_fond_si_on_y_ait.mp3"
  }, 
  {
    "command": "dites_tirez_vous", 
    "file": "./sounds/dites_tirez_vous.mp3"
  }, 
  {
    "command": "dites_tout_de_suite_que_j_ai_des_idees_de_tocard", 
    "file": "./sounds/dites_tout_de_suite_que_j_ai_des_idees_de_tocard.mp3"
  }, 
  {
    "command": "donc-cette-fiole", 
    "file": "./sounds/donc-cette-fiole.mp3"
  }, 
  {
    "command": "donc-vous-allez-faire-une-troupe-delite-avec-vos-cousins-debiles", 
    "file": "./sounds/donc-vous-allez-faire-une-troupe-delite-avec-vos-cousins-debiles.mp3"
  }, 
  {
    "command": "ebaubir", 
    "file": "./sounds/ebaubir.mp3"
  }, 
  {
    "command": "ecartez-vous", 
    "file": "./sounds/ecartez-vous.mp3"
  }, 
  {
    "command": "ecoutez_je_comprend_rien_a_ce_que_vous_faites", 
    "file": "./sounds/ecoutez_je_comprend_rien_a_ce_que_vous_faites.mp3"
  }, 
  {
    "command": "elle-me-fixe-avec-ses-yeux-de-serpent", 
    "file": "./sounds/elle-me-fixe-avec-ses-yeux-de-serpent.mp3"
  }, 
  {
    "command": "elle_avait_choppe_toutes_les_maladies", 
    "file": "./sounds/elle_avait_choppe_toutes_les_maladies.mp3"
  }, 
  {
    "command": "elle_avait_rien_a_y_foutre_deja_pour_commencer", 
    "file": "./sounds/elle_avait_rien_a_y_foutre_deja_pour_commencer.mp3"
  }, 
  {
    "command": "elle_est_ou_la_poulette", 
    "file": "./sounds/elle_est_ou_la_poulette.mp3"
  }, 
  {
    "command": "elle_vomit", 
    "file": "./sounds/elle_vomit.mp3"
  }, 
  {
    "command": "embobinage_dans_l_air", 
    "file": "./sounds/embobinage_dans_l_air.mp3"
  }, 
  {
    "command": "en-fait-jetais-dans-un-paturage", 
    "file": "./sounds/en-fait-jetais-dans-un-paturage.mp3"
  }, 
  {
    "command": "en_garde_espece_de_vieille_pute_degarnie", 
    "file": "./sounds/en_garde_espece_de_vieille_pute_degarnie.mp3"
  }, 
  {
    "command": "en_garde_ma_mignone", 
    "file": "./sounds/en_garde_ma_mignone.mp3"
  }, 
  {
    "command": "enfin-quand-cest-demande-gentiment", 
    "file": "./sounds/enfin-quand-cest-demande-gentiment.mp3"
  }, 
  {
    "command": "enquille", 
    "file": "./sounds/enquille.mp3"
  }, 
  {
    "command": "entre-le-roi-arthur-quest-pas-capable-de-denicher-son-graal", 
    "file": "./sounds/entre-le-roi-arthur-quest-pas-capable-de-denicher-son-graal.mp3"
  }, 
  {
    "command": "epique", 
    "file": "./sounds/epique.mp3"
  }, 
  {
    "command": "essayez_de_faire_des_phrases_pour_vous_deja", 
    "file": "./sounds/essayez_de_faire_des_phrases_pour_vous_deja.mp3"
  }, 
  {
    "command": "est-ce-que-vous-allez-finir-par-fermer-vos-gueules", 
    "file": "./sounds/est-ce-que-vous-allez-finir-par-fermer-vos-gueules.mp3"
  }, 
  {
    "command": "est-ce_que_vous_pouvez_vous_barrer_maintenant", 
    "file": "./sounds/est-ce_que_vous_pouvez_vous_barrer_maintenant.mp3"
  }, 
  {
    "command": "est_ce_que_peut_servir_elan_pigeon", 
    "file": "./sounds/est_ce_que_peut_servir_elan_pigeon.mp3"
  }, 
  {
    "command": "est_ce_quil_sait_nager_deja", 
    "file": "./sounds/est_ce_quil_sait_nager_deja.mp3"
  }, 
  {
    "command": "et-bah-tu-peux-te-la-garder", 
    "file": "./sounds/et-bah-tu-peux-te-la-garder.mp3"
  }, 
  {
    "command": "et-ca-cest-du-nougat", 
    "file": "./sounds/et-ca-cest-du-nougat.mp3"
  }, 
  {
    "command": "et-celle-la-jirai-pas-me-coucher-avant-de-lavoir-bousillee", 
    "file": "./sounds/et-celle-la-jirai-pas-me-coucher-avant-de-lavoir-bousillee.mp3"
  }, 
  {
    "command": "et-moi-je-me-suis-fait-derober-de-lalimentation-tout-le-long-du-voyage", 
    "file": "./sounds/et-moi-je-me-suis-fait-derober-de-lalimentation-tout-le-long-du-voyage.mp3"
  }, 
  {
    "command": "et-oui-meme-t-es-bien-mouchee", 
    "file": "./sounds/et-oui-meme-t-es-bien-mouchee.mp3"
  }, 
  {
    "command": "et_a_un_moment_le_sorcier_s_est_mis_a_nous_menacer_avec_ses_parties_genitales", 
    "file": "./sounds/et_a_un_moment_le_sorcier_s_est_mis_a_nous_menacer_avec_ses_parties_genitales.mp3"
  }, 
  {
    "command": "et_alors_faut_un_permis", 
    "file": "./sounds/et_alors_faut_un_permis.mp3"
  }, 
  {
    "command": "et_cest_de_la_merde", 
    "file": "./sounds/et_cest_de_la_merde.mp3"
  }, 
  {
    "command": "et_puis_alors_mon_petit_pote_si_vous_en_tenez_une_qui_veux_se_marier_avec_vous", 
    "file": "./sounds/et_puis_alors_mon_petit_pote_si_vous_en_tenez_une_qui_veux_se_marier_avec_vous.mp3"
  }, 
  {
    "command": "et_puis_quoi_encore", 
    "file": "./sounds/et_puis_quoi_encore.mp3"
  }, 
  {
    "command": "et_puis_y_a_toujours_une_proportion_de_secoues", 
    "file": "./sounds/et_puis_y_a_toujours_une_proportion_de_secoues.mp3"
  }, 
  {
    "command": "et_si_vous_arretiez_de_gueuler", 
    "file": "./sounds/et_si_vous_arretiez_de_gueuler.mp3"
  }, 
  {
    "command": "et_vous_bande_de_cons", 
    "file": "./sounds/et_vous_bande_de_cons.mp3"
  }, 
  {
    "command": "euh-si-il-lache-une-caisse-ca-le-fait-ou-pas", 
    "file": "./sounds/euh-si-il-lache-une-caisse-ca-le-fait-ou-pas.mp3"
  }, 
  {
    "command": "evidemment_quelquun", 
    "file": "./sounds/evidemment_quelquun.mp3"
  }, 
  {
    "command": "evitez-de-mappeler-maman", 
    "file": "./sounds/evitez-de-mappeler-maman.mp3"
  }, 
  {
    "command": "exagerer_non", 
    "file": "./sounds/exagerer_non.mp3"
  }, 
  {
    "command": "excusez_moi_hein_je_ne_connais_pas_encore_bien_vos_noms", 
    "file": "./sounds/excusez_moi_hein_je_ne_connais_pas_encore_bien_vos_noms.mp3"
  }, 
  {
    "command": "fagot_fagot_fagot", 
    "file": "./sounds/fagot_fagot_fagot.mp3"
  }, 
  {
    "command": "faisons_table_en_marbre", 
    "file": "./sounds/faisons_table_en_marbre.mp3"
  }, 
  {
    "command": "faites-pas-le-con-sire-ouvrez", 
    "file": "./sounds/faites-pas-le-con-sire-ouvrez.mp3"
  }, 
  {
    "command": "faites_gaffe_aux_pieges_a_loups", 
    "file": "./sounds/faites_gaffe_aux_pieges_a_loups.mp3"
  }, 
  {
    "command": "faut-y-aller-a-la-zob", 
    "file": "./sounds/faut-y-aller-a-la-zob.mp3"
  }, 
  {
    "command": "faut_ce_qui_faut", 
    "file": "./sounds/faut_ce_qui_faut.mp3"
  }, 
  {
    "command": "faut_que_je_retourne_a_la_ferme_de_mes_vieux", 
    "file": "./sounds/faut_que_je_retourne_a_la_ferme_de_mes_vieux.mp3"
  }, 
  {
    "command": "federer_mes_couilles", 
    "file": "./sounds/federer_mes_couilles.mp3"
  }, 
  {
    "command": "fer-a-cheval", 
    "file": "./sounds/fer-a-cheval.mp3"
  }, 
  {
    "command": "ferme_ta_gueule", 
    "file": "./sounds/ferme_ta_gueule.mp3"
  }, 
  {
    "command": "fier_je_vais_l_envoyer_trois_mois_a_poil_dans_la_foret", 
    "file": "./sounds/fier_je_vais_l_envoyer_trois_mois_a_poil_dans_la_foret.mp3"
  }, 
  {
    "command": "fils_d_unijambiste", 
    "file": "./sounds/fils_d_unijambiste.mp3"
  }, 
  {
    "command": "fiotte-tatie", 
    "file": "./sounds/fiotte-tatie.mp3"
  }, 
  {
    "command": "fleur_en_bouquet", 
    "file": "./sounds/fleur_en_bouquet.mp3"
  }, 
  {
    "command": "fort_en_pomme_1", 
    "file": "./sounds/fort_en_pomme_1.mp3"
  }, 
  {
    "command": "fort_en_pomme_2", 
    "file": "./sounds/fort_en_pomme_2.mp3"
  }, 
  {
    "command": "fournis_notice", 
    "file": "./sounds/fournis_notice.mp3"
  }, 
  {
    "command": "franchement-une-potion-pour-faire-pisser-bleu", 
    "file": "./sounds/franchement-une-potion-pour-faire-pisser-bleu.mp3"
  }, 
  {
    "command": "gerber-mourir", 
    "file": "./sounds/gerber-mourir.mp3"
  }, 
  {
    "command": "gigoter_des_miches_ca_donne_faim", 
    "file": "./sounds/gigoter_des_miches_ca_donne_faim.mp3"
  }, 
  {
    "command": "gras-sur-le-cul", 
    "file": "./sounds/gras-sur-le-cul.mp3"
  }, 
  {
    "command": "gras_du_cul", 
    "file": "./sounds/gras_du_cul.mp3"
  }, 
  {
    "command": "ha_cest_\u00e7a", 
    "file": "./sounds/ha_cest_\u00e7a.mp3"
  }, 
  {
    "command": "he_les_connards_vous_pouvez_faire_griller_un_porcelet", 
    "file": "./sounds/he_les_connards_vous_pouvez_faire_griller_un_porcelet.mp3"
  }, 
  {
    "command": "hein_titi", 
    "file": "./sounds/hein_titi.mp3"
  }, 
  {
    "command": "heu_cest_plutot_des_cons", 
    "file": "./sounds/heu_cest_plutot_des_cons.mp3"
  }, 
  {
    "command": "honnetement_je_connais_pas_le_mot_la", 
    "file": "./sounds/honnetement_je_connais_pas_le_mot_la.mp3"
  }, 
  {
    "command": "humilite_infiltration", 
    "file": "./sounds/humilite_infiltration.mp3"
  }, 
  {
    "command": "ici_chez_les_salopards", 
    "file": "./sounds/ici_chez_les_salopards.mp3"
  }, 
  {
    "command": "il-est-fort-le-salaud", 
    "file": "./sounds/il-est-fort-le-salaud.mp3"
  }, 
  {
    "command": "il-faut-affranchir-nos-compagnons", 
    "file": "./sounds/il-faut-affranchir-nos-compagnons.mp3"
  }, 
  {
    "command": "il-n-y-a-pas-dequivoque-vous-etes-franchement-un-bourrin", 
    "file": "./sounds/il-n-y-a-pas-dequivoque-vous-etes-franchement-un-bourrin.mp3"
  }, 
  {
    "command": "il-n-y-a-rien-a-prier", 
    "file": "./sounds/il-n-y-a-rien-a-prier.mp3"
  }, 
  {
    "command": "il_avait_une_touffe_de_cheveux_comme_ca_un_vieux_moisi_tout_gueze_a_poil_dans_la_neige", 
    "file": "./sounds/il_avait_une_touffe_de_cheveux_comme_ca_un_vieux_moisi_tout_gueze_a_poil_dans_la_neige.mp3"
  }, 
  {
    "command": "il_est_coince_ce_con_la", 
    "file": "./sounds/il_est_coince_ce_con_la.mp3"
  }, 
  {
    "command": "il_est_pas_beau_mon_graal", 
    "file": "./sounds/il_est_pas_beau_mon_graal.mp3"
  }, 
  {
    "command": "il_m_aura_fait_chier_jusqu_au_bout_celui_la", 
    "file": "./sounds/il_m_aura_fait_chier_jusqu_au_bout_celui_la.mp3"
  }, 
  {
    "command": "il_ne_comprennent_jamais_le_code", 
    "file": "./sounds/il_ne_comprennent_jamais_le_code.mp3"
  }, 
  {
    "command": "il_nous_a_chie_dessus", 
    "file": "./sounds/il_nous_a_chie_dessus.mp3"
  }, 
  {
    "command": "il_pige_rien_a_rien", 
    "file": "./sounds/il_pige_rien_a_rien.mp3"
  }, 
  {
    "command": "il_pue_il_pete", 
    "file": "./sounds/il_pue_il_pete.mp3"
  }, 
  {
    "command": "il_ressemble_a_tatan", 
    "file": "./sounds/il_ressemble_a_tatan.mp3"
  }, 
  {
    "command": "il_trouverait_meme_pas_sa_bite_pour_pisser", 
    "file": "./sounds/il_trouverait_meme_pas_sa_bite_pour_pisser.mp3"
  }, 
  {
    "command": "ils-commencent-par-apprendre-a-lire", 
    "file": "./sounds/ils-commencent-par-apprendre-a-lire.mp3"
  }, 
  {
    "command": "ils-se-sont-pas-leve-1", 
    "file": "./sounds/ils-se-sont-pas-leve-1.mp3"
  }, 
  {
    "command": "ils-se-sont-pas-leve-2", 
    "file": "./sounds/ils-se-sont-pas-leve-2.mp3"
  }, 
  {
    "command": "ils-se-sont-pas-leve-3", 
    "file": "./sounds/ils-se-sont-pas-leve-3.mp3"
  }, 
  {
    "command": "ils_se_barrent_en_mission_pendant_trois_mois_et_ils_reviennent_avec_une_anguille", 
    "file": "./sounds/ils_se_barrent_en_mission_pendant_trois_mois_et_ils_reviennent_avec_une_anguille.mp3"
  }, 
  {
    "command": "ils_sortent_bien_de_quelques_part", 
    "file": "./sounds/ils_sortent_bien_de_quelques_part.mp3"
  }, 
  {
    "command": "inattendu", 
    "file": "./sounds/inattendu.mp3"
  }, 
  {
    "command": "incandescent", 
    "file": "./sounds/incandescent.mp3"
  }, 
  {
    "command": "insipide", 
    "file": "./sounds/insipide.mp3"
  }, 
  {
    "command": "insoupconnable", 
    "file": "./sounds/insoupconnable.mp3"
  }, 
  {
    "command": "interprete", 
    "file": "./sounds/interprete.mp3"
  }, 
  {
    "command": "intro_comaque", 
    "file": "./sounds/intro_comaque.mp3"
  }, 
  {
    "command": "j-ai-cherche-la-merde", 
    "file": "./sounds/j-ai-cherche-la-merde.mp3"
  }, 
  {
    "command": "j-ai-tout-entendu", 
    "file": "./sounds/j-ai-tout-entendu.mp3"
  }, 
  {
    "command": "j_ai_fais_pile_comme_vous_avez_dis_tout_au_feu_de_bois", 
    "file": "./sounds/j_ai_fais_pile_comme_vous_avez_dis_tout_au_feu_de_bois.mp3"
  }, 
  {
    "command": "j_ai_le_droit_d_etre_4_jours_pas_chez_moi", 
    "file": "./sounds/j_ai_le_droit_d_etre_4_jours_pas_chez_moi.mp3"
  }, 
  {
    "command": "j_ai_pas_eu_le_temps_d_enlever_mon_armure", 
    "file": "./sounds/j_ai_pas_eu_le_temps_d_enlever_mon_armure.mp3"
  }, 
  {
    "command": "j_aimerais_bien_qu_on_commence_a_me_considerer_en_tant_que_tel", 
    "file": "./sounds/j_aimerais_bien_qu_on_commence_a_me_considerer_en_tant_que_tel.mp3"
  }, 
  {
    "command": "j_apprecie_les_fruits_au_sirop", 
    "file": "./sounds/j_apprecie_les_fruits_au_sirop.mp3"
  }, 
  {
    "command": "j_en_ai_rien_a_foutre", 
    "file": "./sounds/j_en_ai_rien_a_foutre.mp3"
  }, 
  {
    "command": "jai-le-droit-detre-4-jours-pas-chez-moi", 
    "file": "./sounds/jai-le-droit-detre-4-jours-pas-chez-moi.mp3"
  }, 
  {
    "command": "jai_arrete_les_pronostics", 
    "file": "./sounds/jai_arrete_les_pronostics.mp3"
  }, 
  {
    "command": "jai_pas_envie_de_voir_vos_tronches", 
    "file": "./sounds/jai_pas_envie_de_voir_vos_tronches.mp3"
  }, 
  {
    "command": "jai_rien_compris", 
    "file": "./sounds/jai_rien_compris.mp3"
  }, 
  {
    "command": "jai_toujours_ete_fascine_par_le_monde_paysan", 
    "file": "./sounds/jai_toujours_ete_fascine_par_le_monde_paysan.mp3"
  }, 
  {
    "command": "je-l-ai-pas-dit-fort", 
    "file": "./sounds/je-l-ai-pas-dit-fort.mp3"
  }, 
  {
    "command": "je-moccupe-de-tout-dite-oui", 
    "file": "./sounds/je-moccupe-de-tout-dite-oui.mp3"
  }, 
  {
    "command": "je-vous-ai-toujours-dit-ce-que-vous-faites-avec-les-chiffres", 
    "file": "./sounds/je-vous-ai-toujours-dit-ce-que-vous-faites-avec-les-chiffres.mp3"
  }, 
  {
    "command": "je_connais_que_le_cri", 
    "file": "./sounds/je_connais_que_le_cri.mp3"
  }, 
  {
    "command": "je_crois_pas_que_vous_soyez_le_symbole_de_la_nation_bretonne", 
    "file": "./sounds/je_crois_pas_que_vous_soyez_le_symbole_de_la_nation_bretonne.mp3"
  }, 
  {
    "command": "je_l_ai_perdu", 
    "file": "./sounds/je_l_ai_perdu.mp3"
  }, 
  {
    "command": "je_ne_mange_pas_de_graines", 
    "file": "./sounds/je_ne_mange_pas_de_graines.mp3"
  }, 
  {
    "command": "je_pourrais_gueuler_dans_le_cul_dun_poney", 
    "file": "./sounds/je_pourrais_gueuler_dans_le_cul_dun_poney.mp3"
  }, 
  {
    "command": "je_refuse_daller_me_battre", 
    "file": "./sounds/je_refuse_daller_me_battre.mp3"
  }, 
  {
    "command": "je_sens_que_ce_va_encore_etre_capital", 
    "file": "./sounds/je_sens_que_ce_va_encore_etre_capital.mp3"
  }, 
  {
    "command": "je_trouve_qu_on_nous_prend_un_peu_trop_pour_des_cons", 
    "file": "./sounds/je_trouve_qu_on_nous_prend_un_peu_trop_pour_des_cons.mp3"
  }, 
  {
    "command": "je_vais_devenir_paladin", 
    "file": "./sounds/je_vais_devenir_paladin.mp3"
  }, 
  {
    "command": "je_vais_pas_faire_des_aller_retours_3_fois_par_jours", 
    "file": "./sounds/je_vais_pas_faire_des_aller_retours_3_fois_par_jours.mp3"
  }, 
  {
    "command": "je_vais_vous_passer_le_gout_du_plein_air_moi", 
    "file": "./sounds/je_vais_vous_passer_le_gout_du_plein_air_moi.mp3"
  }, 
  {
    "command": "je_veux_mhabiller_de_lierre_et_me_coiffer_de_roseaux", 
    "file": "./sounds/je_veux_mhabiller_de_lierre_et_me_coiffer_de_roseaux.mp3"
  }, 
  {
    "command": "je_vois", 
    "file": "./sounds/je_vois.mp3"
  }, 
  {
    "command": "je_vois_pas_le_rapport_avec_bretagne", 
    "file": "./sounds/je_vois_pas_le_rapport_avec_bretagne.mp3"
  }, 
  {
    "command": "je_vois_trouble", 
    "file": "./sounds/je_vois_trouble.mp3"
  }, 
  {
    "command": "je_vous_disais_que_j_etais_victime_des_colifiches", 
    "file": "./sounds/je_vous_disais_que_j_etais_victime_des_colifiches.mp3"
  }, 
  {
    "command": "joie_de_vivre", 
    "file": "./sounds/joie_de_vivre.mp3"
  }, 
  {
    "command": "jpeux_pas_vous_dire", 
    "file": "./sounds/jpeux_pas_vous_dire.mp3"
  }, 
  {
    "command": "jsais_pas_cqui_vous_faut", 
    "file": "./sounds/jsais_pas_cqui_vous_faut.mp3"
  }, 
  {
    "command": "jsuis_a_mon_poste_cest_pas_le_cas_de_tout_le_monde", 
    "file": "./sounds/jsuis_a_mon_poste_cest_pas_le_cas_de_tout_le_monde.mp3"
  }, 
  {
    "command": "jvoudrais_pas_faire_ma_raclette", 
    "file": "./sounds/jvoudrais_pas_faire_ma_raclette.mp3"
  }, 
  {
    "command": "jvous_fait_confiance", 
    "file": "./sounds/jvous_fait_confiance.mp3"
  }, 
  {
    "command": "jy_vais_javoine", 
    "file": "./sounds/jy_vais_javoine.mp3"
  }, 
  {
    "command": "kaamelott_cest_pas_une_cooperative_bovine", 
    "file": "./sounds/kaamelott_cest_pas_une_cooperative_bovine.mp3"
  }, 
  {
    "command": "karadoc-cest-le-gars-brillant", 
    "file": "./sounds/karadoc-cest-le-gars-brillant.mp3"
  }, 
  {
    "command": "la-blague-est-pas-drole", 
    "file": "./sounds/la-blague-est-pas-drole.mp3"
  }, 
  {
    "command": "la-cest-sur-vu-les-tronche-que-vous-tirez", 
    "file": "./sounds/la-cest-sur-vu-les-tronche-que-vous-tirez.mp3"
  }, 
  {
    "command": "la-chevre-a-beler-5-min", 
    "file": "./sounds/la-chevre-a-beler-5-min.mp3"
  }, 
  {
    "command": "la-tournure-est-plus-graduelle", 
    "file": "./sounds/la-tournure-est-plus-graduelle.mp3"
  }, 
  {
    "command": "la-vue-du-bourgeois-ca-me-fait-de-laerophagie", 
    "file": "./sounds/la-vue-du-bourgeois-ca-me-fait-de-laerophagie.mp3"
  }, 
  {
    "command": "la_bouffe_est_interdite", 
    "file": "./sounds/la_bouffe_est_interdite.mp3"
  }, 
  {
    "command": "la_dedans_carbure", 
    "file": "./sounds/la_dedans_carbure.mp3"
  }, 
  {
    "command": "la_gerbe", 
    "file": "./sounds/la_gerbe.mp3"
  }, 
  {
    "command": "la_monstruosite", 
    "file": "./sounds/la_monstruosite.mp3"
  }, 
  {
    "command": "la_vache_ca_daube_la_dedans_il_y_a_un_chat_qui_est_creve_ou_quoi", 
    "file": "./sounds/la_vache_ca_daube_la_dedans_il_y_a_un_chat_qui_est_creve_ou_quoi.mp3"
  }, 
  {
    "command": "lache_une_caisse", 
    "file": "./sounds/lache_une_caisse.mp3"
  }, 
  {
    "command": "lair_idiote", 
    "file": "./sounds/lair_idiote.mp3"
  }, 
  {
    "command": "laissez_le_a_lair", 
    "file": "./sounds/laissez_le_a_lair.mp3"
  }, 
  {
    "command": "le-plus-interessant-cest-comment-vous-arrivez-a-faire-un-truc-aussi-immonde", 
    "file": "./sounds/le-plus-interessant-cest-comment-vous-arrivez-a-faire-un-truc-aussi-immonde.mp3"
  }, 
  {
    "command": "le-seigneur-perceval-ne-se-met-jamais-en-situation-dangeureuse", 
    "file": "./sounds/le-seigneur-perceval-ne-se-met-jamais-en-situation-dangeureuse.mp3"
  }, 
  {
    "command": "le-votre-aussi-cest-de-la-merde", 
    "file": "./sounds/le-votre-aussi-cest-de-la-merde.mp3"
  }, 
  {
    "command": "le_caca_des_pigeons_c_est_caca_faut_pas_manger", 
    "file": "./sounds/le_caca_des_pigeons_c_est_caca_faut_pas_manger.mp3"
  }, 
  {
    "command": "le_graal_par_ci_le_graal_par_la", 
    "file": "./sounds/le_graal_par_ci_le_graal_par_la.mp3"
  }, 
  {
    "command": "le_gras_cest_la_vie", 
    "file": "./sounds/le_gras_cest_la_vie.mp3"
  }, 
  {
    "command": "le_pognon_ca_va_ca_vient", 
    "file": "./sounds/le_pognon_ca_va_ca_vient.mp3"
  }, 
  {
    "command": "le_poisson_le_petit_poisson", 
    "file": "./sounds/le_poisson_le_petit_poisson.mp3"
  }, 
  {
    "command": "le_prochain_qui_l_ouvre_galeres_trois_ans", 
    "file": "./sounds/le_prochain_qui_l_ouvre_galeres_trois_ans.mp3"
  }, 
  {
    "command": "les-chevaliers-de-mes-deux", 
    "file": "./sounds/les-chevaliers-de-mes-deux.mp3"
  }, 
  {
    "command": "les-femmes-jaime-pas-ca-c'est-de-la-saloperie", 
    "file": "./sounds/les-femmes-jaime-pas-ca-c'est-de-la-saloperie.mp3"
  }, 
  {
    "command": "les_pattes_de_canard", 
    "file": "./sounds/les_pattes_de_canard.mp3"
  }, 
  {
    "command": "les_premieres_oeillades", 
    "file": "./sounds/les_premieres_oeillades.mp3"
  }, 
  {
    "command": "lui_on_comprend_ni_ce_qu_il_dit_ni_ce_qu_il_fait", 
    "file": "./sounds/lui_on_comprend_ni_ce_qu_il_dit_ni_ce_qu_il_fait.mp3"
  }, 
  {
    "command": "ma_femme_a_pas_de_moustache", 
    "file": "./sounds/ma_femme_a_pas_de_moustache.mp3"
  }, 
  {
    "command": "madresse_pas_la_parole", 
    "file": "./sounds/madresse_pas_la_parole.mp3"
  }, 
  {
    "command": "maintenant-il-faut-nous-ecouter-parce-que-la-on-en-a-gros", 
    "file": "./sounds/maintenant-il-faut-nous-ecouter-parce-que-la-on-en-a-gros.mp3"
  }, 
  {
    "command": "mais-allez-y-cest-pour-vous-stimuler-bon-dieu", 
    "file": "./sounds/mais-allez-y-cest-pour-vous-stimuler-bon-dieu.mp3"
  }, 
  {
    "command": "mais-allez-y-magnez-vous-le-fion-espece-de-grosse-dinde", 
    "file": "./sounds/mais-allez-y-magnez-vous-le-fion-espece-de-grosse-dinde.mp3"
  }, 
  {
    "command": "mais-cest-de-la-merde", 
    "file": "./sounds/mais-cest-de-la-merde.mp3"
  }, 
  {
    "command": "mais-cest-incroyable-jai-limpression-de-bouffer-de-la-terre", 
    "file": "./sounds/mais-cest-incroyable-jai-limpression-de-bouffer-de-la-terre.mp3"
  }, 
  {
    "command": "mais-cest-pas-complique-quand-vous-voyez-des-gadins", 
    "file": "./sounds/mais-cest-pas-complique-quand-vous-voyez-des-gadins.mp3"
  }, 
  {
    "command": "mais-compare-a-ce-quon-a-trouve", 
    "file": "./sounds/mais-compare-a-ce-quon-a-trouve.mp3"
  }, 
  {
    "command": "mais-evidemment-cest-sans-alcool", 
    "file": "./sounds/mais-evidemment-cest-sans-alcool.mp3"
  }, 
  {
    "command": "mais-je-le-sais-bien-que-vous-avez-pas-les-cles-andouille", 
    "file": "./sounds/mais-je-le-sais-bien-que-vous-avez-pas-les-cles-andouille.mp3"
  }, 
  {
    "command": "mais-non-qu-est-ce-que-jen-ai-a-carrer", 
    "file": "./sounds/mais-non-qu-est-ce-que-jen-ai-a-carrer.mp3"
  }, 
  {
    "command": "mais-pas-du-tout", 
    "file": "./sounds/mais-pas-du-tout.mp3"
  }, 
  {
    "command": "mais-qu-est-ce-que-vous-venez-me-gonfler-avec-votre-pere-blaise", 
    "file": "./sounds/mais-qu-est-ce-que-vous-venez-me-gonfler-avec-votre-pere-blaise.mp3"
  }, 
  {
    "command": "mais-qu-est-ce-que-vous-voulez-quon-en-foute-de-vos-peigne-culs", 
    "file": "./sounds/mais-qu-est-ce-que-vous-voulez-quon-en-foute-de-vos-peigne-culs.mp3"
  }, 
  {
    "command": "mais-vous-etes-pas-mort-espece-de-connard", 
    "file": "./sounds/mais-vous-etes-pas-mort-espece-de-connard.mp3"
  }, 
  {
    "command": "mais-vous-guidez-que-dalle", 
    "file": "./sounds/mais-vous-guidez-que-dalle.mp3"
  }, 
  {
    "command": "mais_allez_chier_dans_une_fiolle", 
    "file": "./sounds/mais_allez_chier_dans_une_fiolle.mp3"
  }, 
  {
    "command": "mais_arretez_de_discutailler_cinq_minutes", 
    "file": "./sounds/mais_arretez_de_discutailler_cinq_minutes.mp3"
  }, 
  {
    "command": "mais_c_est_pas_possible_d_entendre_ca", 
    "file": "./sounds/mais_c_est_pas_possible_d_entendre_ca.mp3"
  }, 
  {
    "command": "mais_c_est_une_honte_d_entendre_des_trucs_comme_ca", 
    "file": "./sounds/mais_c_est_une_honte_d_entendre_des_trucs_comme_ca.mp3"
  }, 
  {
    "command": "mais_evidemment_que_si", 
    "file": "./sounds/mais_evidemment_que_si.mp3"
  }, 
  {
    "command": "mais_faut_pas_deconner_ils_y_sont_pour_rien", 
    "file": "./sounds/mais_faut_pas_deconner_ils_y_sont_pour_rien.mp3"
  }, 
  {
    "command": "mais_je_vous_ai_dis_que_c_etait_important", 
    "file": "./sounds/mais_je_vous_ai_dis_que_c_etait_important.mp3"
  }, 
  {
    "command": "mais_je_vous_emmerde_mon_ptit_pote", 
    "file": "./sounds/mais_je_vous_emmerde_mon_ptit_pote.mp3"
  }, 
  {
    "command": "mais_mariez_vous_avec_qui_vous_voulez_et_allez_crever", 
    "file": "./sounds/mais_mariez_vous_avec_qui_vous_voulez_et_allez_crever.mp3"
  }, 
  {
    "command": "mais_moi_je_vous_previens_jy_connais_rien_en_champignon", 
    "file": "./sounds/mais_moi_je_vous_previens_jy_connais_rien_en_champignon.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_que_j_en_ai_a_foutre", 
    "file": "./sounds/mais_qu_est_ce_que_j_en_ai_a_foutre.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_que_j_en_ai_a_foutre_vous_pourriez_bien_vous_marier_avec_une_chevre_si_ca_vous_chante", 
    "file": "./sounds/mais_qu_est_ce_que_j_en_ai_a_foutre_vous_pourriez_bien_vous_marier_avec_une_chevre_si_ca_vous_chante.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_que_vous_me_bavez_encore", 
    "file": "./sounds/mais_qu_est_ce_que_vous_me_bavez_encore.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_que_vous_voulez_que_ca_me_foute", 
    "file": "./sounds/mais_qu_est_ce_que_vous_voulez_que_ca_me_foute.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_que_vous_voulez_que_ca_me_foute_vos_conneries", 
    "file": "./sounds/mais_qu_est_ce_que_vous_voulez_que_ca_me_foute_vos_conneries.mp3"
  }, 
  {
    "command": "mais_qu_est_ce_qui_vous_prend_ca_va_pas_vous_etes_dingue", 
    "file": "./sounds/mais_qu_est_ce_qui_vous_prend_ca_va_pas_vous_etes_dingue.mp3"
  }, 
  {
    "command": "mais_si_on_fait_marrer_tout_le_monde", 
    "file": "./sounds/mais_si_on_fait_marrer_tout_le_monde.mp3"
  }, 
  {
    "command": "mais_tout_a_fait", 
    "file": "./sounds/mais_tout_a_fait.mp3"
  }, 
  {
    "command": "mais_vous_savez_ce_que_ca_veux_dire_au_moins", 
    "file": "./sounds/mais_vous_savez_ce_que_ca_veux_dire_au_moins.mp3"
  }, 
  {
    "command": "mais_ya_rien_a_developper_cest_de_la_merde_cest_tout", 
    "file": "./sounds/mais_ya_rien_a_developper_cest_de_la_merde_cest_tout.mp3"
  }, 
  {
    "command": "malademental", 
    "file": "./sounds/malademental.mp3"
  }, 
  {
    "command": "mavez_lair_en_forme", 
    "file": "./sounds/mavez_lair_en_forme.mp3"
  }, 
  {
    "command": "me_parler_a_cette_heure_ci_vous_voulez_mon_pied_au_cul", 
    "file": "./sounds/me_parler_a_cette_heure_ci_vous_voulez_mon_pied_au_cul.mp3"
  }, 
  {
    "command": "mecreant", 
    "file": "./sounds/mecreant.mp3"
  }, 
  {
    "command": "mecreant_2", 
    "file": "./sounds/mecreant_2.mp3"
  }, 
  {
    "command": "merci_de_rien", 
    "file": "./sounds/merci_de_rien.mp3"
  }, 
  {
    "command": "merciiiii", 
    "file": "./sounds/merciiiii.mp3"
  }, 
  {
    "command": "merde-la-ca-vous-va-ca", 
    "file": "./sounds/merde-la-ca-vous-va-ca.mp3"
  }, 
  {
    "command": "mes_endives", 
    "file": "./sounds/mes_endives.mp3"
  }, 
  {
    "command": "meteo", 
    "file": "./sounds/meteo.mp3"
  }, 
  {
    "command": "mettre_du_beurre_au_fond_du_plat", 
    "file": "./sounds/mettre_du_beurre_au_fond_du_plat.mp3"
  }, 
  {
    "command": "mi_ours_mi_scorpion", 
    "file": "./sounds/mi_ours_mi_scorpion.mp3"
  }, 
  {
    "command": "mochete-en-plus-quand-on-voit-le-morceau-quil-se-trimballe", 
    "file": "./sounds/mochete-en-plus-quand-on-voit-le-morceau-quil-se-trimballe.mp3"
  }, 
  {
    "command": "moi-je-serais-vous-je-vous-ecouterais", 
    "file": "./sounds/moi-je-serais-vous-je-vous-ecouterais.mp3"
  }, 
  {
    "command": "moi-pour-quon-me-reconnaisse-faut-juste-2-3-coups-de-pinceaux", 
    "file": "./sounds/moi-pour-quon-me-reconnaisse-faut-juste-2-3-coups-de-pinceaux.mp3"
  }, 
  {
    "command": "moi_a_lepoque_je_voulais_faire_voeux_de_pauvrete_--_et_alors__--_ben_avec_le_pognon_que_j", 
    "file": "./sounds/moi_a_lepoque_je_voulais_faire_voeux_de_pauvrete_--_et_alors__--_ben_avec_le_pognon_que_j.mp3"
  }, 
  {
    "command": "moi_depuis_ce_matin_je_me_fait_traiter_de_gonzesse", 
    "file": "./sounds/moi_depuis_ce_matin_je_me_fait_traiter_de_gonzesse.mp3"
  }, 
  {
    "command": "moi_il_faut_que_j_enleve_mon_armure", 
    "file": "./sounds/moi_il_faut_que_j_enleve_mon_armure.mp3"
  }, 
  {
    "command": "moi_jai_toujours_dit", 
    "file": "./sounds/moi_jai_toujours_dit.mp3"
  }, 
  {
    "command": "moi_jai_toujours_dit2", 
    "file": "./sounds/moi_jai_toujours_dit2.mp3"
  }, 
  {
    "command": "moi_je_serais_vous_je_vous_ecouterais", 
    "file": "./sounds/moi_je_serais_vous_je_vous_ecouterais.mp3"
  }, 
  {
    "command": "moi_non_plus_je_vois_rien", 
    "file": "./sounds/moi_non_plus_je_vois_rien.mp3"
  }, 
  {
    "command": "mon_frere_y_peut_pas_aller_a_l_ecole", 
    "file": "./sounds/mon_frere_y_peut_pas_aller_a_l_ecole.mp3"
  }, 
  {
    "command": "mordu", 
    "file": "./sounds/mordu.mp3"
  }, 
  {
    "command": "nan-ca-va-pas-etre-possible-ca", 
    "file": "./sounds/nan-ca-va-pas-etre-possible-ca.mp3"
  }, 
  {
    "command": "nan-cest-nimporte-quoi", 
    "file": "./sounds/nan-cest-nimporte-quoi.mp3"
  }, 
  {
    "command": "nan-mais-en-vrai-pas-sur-la-carte", 
    "file": "./sounds/nan-mais-en-vrai-pas-sur-la-carte.mp3"
  }, 
  {
    "command": "nan-mais-par-contre-ils-sont-super-cons", 
    "file": "./sounds/nan-mais-par-contre-ils-sont-super-cons.mp3"
  }, 
  {
    "command": "nan-mais-quand-meme", 
    "file": "./sounds/nan-mais-quand-meme.mp3"
  }, 
  {
    "command": "nan-nan-nous-on-est-pas-fixe", 
    "file": "./sounds/nan-nan-nous-on-est-pas-fixe.mp3"
  }, 
  {
    "command": "nan_la_sans_deconner_cest_zero", 
    "file": "./sounds/nan_la_sans_deconner_cest_zero.mp3"
  }, 
  {
    "command": "nan_mais_c_est_pas_possible_elle_me_foutra_pas_la_paix", 
    "file": "./sounds/nan_mais_c_est_pas_possible_elle_me_foutra_pas_la_paix.mp3"
  }, 
  {
    "command": "ne_te_mets_pas_en_dehors_du_chemin_de_la_redemption", 
    "file": "./sounds/ne_te_mets_pas_en_dehors_du_chemin_de_la_redemption.mp3"
  }, 
  {
    "command": "nempeche_que_cest_moi_qui_avait_propose", 
    "file": "./sounds/nempeche_que_cest_moi_qui_avait_propose.mp3"
  }, 
  {
    "command": "ni_vu_ni_connu", 
    "file": "./sounds/ni_vu_ni_connu.mp3"
  }, 
  {
    "command": "non-il-est-degueulasse-celui-la", 
    "file": "./sounds/non-il-est-degueulasse-celui-la.mp3"
  }, 
  {
    "command": "non-mais-biensur-donc-vous-vous-degommez-les-souris-au-maillet", 
    "file": "./sounds/non-mais-biensur-donc-vous-vous-degommez-les-souris-au-maillet.mp3"
  }, 
  {
    "command": "non-mais-franchement-je-serais-nous-je-vous-ecouterais", 
    "file": "./sounds/non-mais-franchement-je-serais-nous-je-vous-ecouterais.mp3"
  }, 
  {
    "command": "non-mais-vous-pouvez-la-distraire-avec-un-numero-de-jonglage", 
    "file": "./sounds/non-mais-vous-pouvez-la-distraire-avec-un-numero-de-jonglage.mp3"
  }, 
  {
    "command": "non-on-a-fait-3-bornes-sil-vous-plait", 
    "file": "./sounds/non-on-a-fait-3-bornes-sil-vous-plait.mp3"
  }, 
  {
    "command": "non_mais_je_sens_bien_que_vous_essayer_de_me_dire_quelque_chose", 
    "file": "./sounds/non_mais_je_sens_bien_que_vous_essayer_de_me_dire_quelque_chose.mp3"
  }, 
  {
    "command": "non_psychologique_c_est_tout_ce_qui_est_a_la_campagne", 
    "file": "./sounds/non_psychologique_c_est_tout_ce_qui_est_a_la_campagne.mp3"
  }, 
  {
    "command": "non_taisez_vous", 
    "file": "./sounds/non_taisez_vous.mp3"
  }, 
  {
    "command": "notre-enchanteur-minforme-que-dhabitude-il-y-arrive-tres-bien", 
    "file": "./sounds/notre-enchanteur-minforme-que-dhabitude-il-y-arrive-tres-bien.mp3"
  }, 
  {
    "command": "nous-on-foule-le-fruit-avec-nos-propres-pieds", 
    "file": "./sounds/nous-on-foule-le-fruit-avec-nos-propres-pieds.mp3"
  }, 
  {
    "command": "nuo_pusso_volo", 
    "file": "./sounds/nuo_pusso_volo.mp3"
  }, 
  {
    "command": "oh-bah-oui-vous-en-etes-une-belle-forme-durticaire", 
    "file": "./sounds/oh-bah-oui-vous-en-etes-une-belle-forme-durticaire.mp3"
  }, 
  {
    "command": "oh-la-vache-mais-cest-nul", 
    "file": "./sounds/oh-la-vache-mais-cest-nul.mp3"
  }, 
  {
    "command": "oh-non-mais-il-y-a-des-jours-vous-deconnez-sec", 
    "file": "./sounds/oh-non-mais-il-y-a-des-jours-vous-deconnez-sec.mp3"
  }, 
  {
    "command": "oh_ca_fait_rien", 
    "file": "./sounds/oh_ca_fait_rien.mp3"
  }, 
  {
    "command": "oh_cest_la_vacherie_ca", 
    "file": "./sounds/oh_cest_la_vacherie_ca.mp3"
  }, 
  {
    "command": "oh_et_puis_j_en_ai_marre", 
    "file": "./sounds/oh_et_puis_j_en_ai_marre.mp3"
  }, 
  {
    "command": "oh_la_vache", 
    "file": "./sounds/oh_la_vache.mp3"
  }, 
  {
    "command": "oh_putain_oui", 
    "file": "./sounds/oh_putain_oui.mp3"
  }, 
  {
    "command": "ok_on_va_arreter_le_tire_avec_les_defis", 
    "file": "./sounds/ok_on_va_arreter_le_tire_avec_les_defis.mp3"
  }, 
  {
    "command": "on-est-indestructible", 
    "file": "./sounds/on-est-indestructible.mp3"
  }, 
  {
    "command": "on-pisse-pas-contre-les-murs-de-la-chapelle-cest-clair", 
    "file": "./sounds/on-pisse-pas-contre-les-murs-de-la-chapelle-cest-clair.mp3"
  }, 
  {
    "command": "on_a_pas_regarde_dans_les_f", 
    "file": "./sounds/on_a_pas_regarde_dans_les_f.mp3"
  }, 
  {
    "command": "on_en_a_gros", 
    "file": "./sounds/on_en_a_gros.mp3"
  }, 
  {
    "command": "on_essaie_de_catapulter_un_danseur", 
    "file": "./sounds/on_essaie_de_catapulter_un_danseur.mp3"
  }, 
  {
    "command": "on_est_forts", 
    "file": "./sounds/on_est_forts.mp3"
  }, 
  {
    "command": "on_est_pas_sorti_du_sable", 
    "file": "./sounds/on_est_pas_sorti_du_sable.mp3"
  }, 
  {
    "command": "on_fera_tintin_pour_le_clafoutis", 
    "file": "./sounds/on_fera_tintin_pour_le_clafoutis.mp3"
  }, 
  {
    "command": "on_plaisante_on_plaisante", 
    "file": "./sounds/on_plaisante_on_plaisante.mp3"
  }, 
  {
    "command": "ouais-cest-grace-a-notre-arme-secrete", 
    "file": "./sounds/ouais-cest-grace-a-notre-arme-secrete.mp3"
  }, 
  {
    "command": "ouais_ca_aussi", 
    "file": "./sounds/ouais_ca_aussi.mp3"
  }, 
  {
    "command": "ouais_cest_mortel_ouais", 
    "file": "./sounds/ouais_cest_mortel_ouais.mp3"
  }, 
  {
    "command": "oui-peut-etre-oui-oui", 
    "file": "./sounds/oui-peut-etre-oui-oui.mp3"
  }, 
  {
    "command": "oui", 
    "file": "./sounds/oui.mp3"
  }, 
  {
    "command": "oui_ben_non", 
    "file": "./sounds/oui_ben_non.mp3"
  }, 
  {
    "command": "oui_enfin_je_me_comprends", 
    "file": "./sounds/oui_enfin_je_me_comprends.mp3"
  }, 
  {
    "command": "oui_et_ben_moi_je_vous_donne_lordre_de_lui_preter_votre_corne_parce_que_quand_on_est_gentil_on_prete", 
    "file": "./sounds/oui_et_ben_moi_je_vous_donne_lordre_de_lui_preter_votre_corne_parce_que_quand_on_est_gentil_on_prete.mp3"
  }, 
  {
    "command": "oui_oh_ca_va_je_connais_le_couplet_on_est_fatigue_on_est_fatigue_vous_me_le_cancane_depuis_midi", 
    "file": "./sounds/oui_oh_ca_va_je_connais_le_couplet_on_est_fatigue_on_est_fatigue_vous_me_le_cancane_depuis_midi.mp3"
  }, 
  {
    "command": "oui_ou_une_fissure_a_colmater_dans_un_muret", 
    "file": "./sounds/oui_ou_une_fissure_a_colmater_dans_un_muret.mp3"
  }, 
  {
    "command": "par-contre-il-est-hyper-con-je-sais-pas-pourquoi", 
    "file": "./sounds/par-contre-il-est-hyper-con-je-sais-pas-pourquoi.mp3"
  }, 
  {
    "command": "parce-que-vous-etes-en-train-de-faire-une-connerie-la-quand-meme", 
    "file": "./sounds/parce-que-vous-etes-en-train-de-faire-une-connerie-la-quand-meme.mp3"
  }, 
  {
    "command": "parce_que_la_quite_a_se_faire_reperer_on_prendrait_moins_de_risque_a_faire_venir_un_orchestre", 
    "file": "./sounds/parce_que_la_quite_a_se_faire_reperer_on_prendrait_moins_de_risque_a_faire_venir_un_orchestre.mp3"
  }, 
  {
    "command": "parfaitement_antipathique", 
    "file": "./sounds/parfaitement_antipathique.mp3"
  }, 
  {
    "command": "parle_de_travers_cureton", 
    "file": "./sounds/parle_de_travers_cureton.mp3"
  }, 
  {
    "command": "pas-moyen-de-lui-faire-fermer-sa-gueule", 
    "file": "./sounds/pas-moyen-de-lui-faire-fermer-sa-gueule.mp3"
  }, 
  {
    "command": "pas-moyen-de-piger-un-broc-de-ce-quil-dit", 
    "file": "./sounds/pas-moyen-de-piger-un-broc-de-ce-quil-dit.mp3"
  }, 
  {
    "command": "pas_dalcool", 
    "file": "./sounds/pas_dalcool.mp3"
  }, 
  {
    "command": "pas_de_quoi_en_chier_une_galette", 
    "file": "./sounds/pas_de_quoi_en_chier_une_galette.mp3"
  }, 
  {
    "command": "pas_du_tout_les_lapins_les_lapins_c_est_gentil", 
    "file": "./sounds/pas_du_tout_les_lapins_les_lapins_c_est_gentil.mp3"
  }, 
  {
    "command": "pas_envie_de_participer", 
    "file": "./sounds/pas_envie_de_participer.mp3"
  }, 
  {
    "command": "pas_foutu_de_savoir_son_nom", 
    "file": "./sounds/pas_foutu_de_savoir_son_nom.mp3"
  }, 
  {
    "command": "patience-plat-sans-sauce", 
    "file": "./sounds/patience-plat-sans-sauce.mp3"
  }, 
  {
    "command": "pauvre_conne", 
    "file": "./sounds/pauvre_conne.mp3"
  }, 
  {
    "command": "pays_de_galles_independant", 
    "file": "./sounds/pays_de_galles_independant.mp3"
  }, 
  {
    "command": "peigne_zizi", 
    "file": "./sounds/peigne_zizi.mp3"
  }, 
  {
    "command": "petit_a_petit_vers_plus_dautonomie", 
    "file": "./sounds/petit_a_petit_vers_plus_dautonomie.mp3"
  }, 
  {
    "command": "petit_ton_decale", 
    "file": "./sounds/petit_ton_decale.mp3"
  }, 
  {
    "command": "petite_corne", 
    "file": "./sounds/petite_corne.mp3"
  }, 
  {
    "command": "peut-etre-meme-que-je-mette-une-armure", 
    "file": "./sounds/peut-etre-meme-que-je-mette-une-armure.mp3"
  }, 
  {
    "command": "pfff_c_est_pour_ca_que_je_pane_rien_aux_livres_moi_ca_veut_pas_dire_ce_qu_il_y_a_marque", 
    "file": "./sounds/pfff_c_est_pour_ca_que_je_pane_rien_aux_livres_moi_ca_veut_pas_dire_ce_qu_il_y_a_marque.mp3"
  }, 
  {
    "command": "pfiou-pfiou-pfiou", 
    "file": "./sounds/pfiou-pfiou-pfiou.mp3"
  }, 
  {
    "command": "pique_diagonale", 
    "file": "./sounds/pique_diagonale.mp3"
  }, 
  {
    "command": "pires-trucs-reparation", 
    "file": "./sounds/pires-trucs-reparation.mp3"
  }, 
  {
    "command": "plait_il", 
    "file": "./sounds/plait_il.mp3"
  }, 
  {
    "command": "plus-trop-parler", 
    "file": "./sounds/plus-trop-parler.mp3"
  }, 
  {
    "command": "politique_de_l_autruche", 
    "file": "./sounds/politique_de_l_autruche.mp3"
  }, 
  {
    "command": "pour_le_detail_je_sais_pas", 
    "file": "./sounds/pour_le_detail_je_sais_pas.mp3"
  }, 
  {
    "command": "pour_savoir_si_il_va_y_avoir_du_vent", 
    "file": "./sounds/pour_savoir_si_il_va_y_avoir_du_vent.mp3"
  }, 
  {
    "command": "pourquoi-voulez-vous-que-je-pense-a-la-reine", 
    "file": "./sounds/pourquoi-voulez-vous-que-je-pense-a-la-reine.mp3"
  }, 
  {
    "command": "pourquoi_pas1", 
    "file": "./sounds/pourquoi_pas1.mp3"
  }, 
  {
    "command": "pourquoi_pas2", 
    "file": "./sounds/pourquoi_pas2.mp3"
  }, 
  {
    "command": "pourquoi_qu_on_gueule", 
    "file": "./sounds/pourquoi_qu_on_gueule.mp3"
  }, 
  {
    "command": "ptetre_une_connerie", 
    "file": "./sounds/ptetre_une_connerie.mp3"
  }, 
  {
    "command": "ptite_pucelle", 
    "file": "./sounds/ptite_pucelle.mp3"
  }, 
  {
    "command": "putain_faut_vraiment_qu_on_se_groulle", 
    "file": "./sounds/putain_faut_vraiment_qu_on_se_groulle.mp3"
  }, 
  {
    "command": "putain_il_est_fort_ce_con", 
    "file": "./sounds/putain_il_est_fort_ce_con.mp3"
  }, 
  {
    "command": "qu-est-ce-que-cest-cette-tisane", 
    "file": "./sounds/qu-est-ce-que-cest-cette-tisane.mp3"
  }, 
  {
    "command": "qu-est-ce-que-je-suis-en-train-de-faire-avec-mon-doigt", 
    "file": "./sounds/qu-est-ce-que-je-suis-en-train-de-faire-avec-mon-doigt.mp3"
  }, 
  {
    "command": "qu-est-ce-qui-a-dautre-qui-pue-sinon", 
    "file": "./sounds/qu-est-ce-qui-a-dautre-qui-pue-sinon.mp3"
  }, 
  {
    "command": "qu-est_ce_dire_que_ceci", 
    "file": "./sounds/qu-est_ce_dire_que_ceci.mp3"
  }, 
  {
    "command": "qu_est_ce_que_vous_voulez_savoir_allez_vous_vous_magner_le_tronc_maintenant", 
    "file": "./sounds/qu_est_ce_que_vous_voulez_savoir_allez_vous_vous_magner_le_tronc_maintenant.mp3"
  }, 
  {
    "command": "quand_je_comprends_pas_je_reponds_pas", 
    "file": "./sounds/quand_je_comprends_pas_je_reponds_pas.mp3"
  }, 
  {
    "command": "quand_meme_raide", 
    "file": "./sounds/quand_meme_raide.mp3"
  }, 
  {
    "command": "quand_on_gueule_sans_savoir_pourquoi", 
    "file": "./sounds/quand_on_gueule_sans_savoir_pourquoi.mp3"
  }, 
  {
    "command": "quand_on_se_fache", 
    "file": "./sounds/quand_on_se_fache.mp3"
  }, 
  {
    "command": "quequette", 
    "file": "./sounds/quequette.mp3"
  }, 
  {
    "command": "quest-ce-que-cest-ce-nouveau-genre-seigneur-lancelot", 
    "file": "./sounds/quest-ce-que-cest-ce-nouveau-genre-seigneur-lancelot.mp3"
  }, 
  {
    "command": "quest-ce-que-vous-racontez-cest-pas-ca", 
    "file": "./sounds/quest-ce-que-vous-racontez-cest-pas-ca.mp3"
  }, 
  {
    "command": "quest-ce-que-vous-voulez-que-ca-me-foute", 
    "file": "./sounds/quest-ce-que-vous-voulez-que-ca-me-foute.mp3"
  }, 
  {
    "command": "quest_ce_que_vous_attendez_pour_la_couper", 
    "file": "./sounds/quest_ce_que_vous_attendez_pour_la_couper.mp3"
  }, 
  {
    "command": "quest_ce_qui_est_petit_et_marron", 
    "file": "./sounds/quest_ce_qui_est_petit_et_marron.mp3"
  }, 
  {
    "command": "quicher-tete", 
    "file": "./sounds/quicher-tete.mp3"
  }, 
  {
    "command": "quies", 
    "file": "./sounds/quies.mp3"
  }, 
  {
    "command": "quoi-bah-mon-cochon-vous-manquez-pas-de-cran", 
    "file": "./sounds/quoi-bah-mon-cochon-vous-manquez-pas-de-cran.mp3"
  }, 
  {
    "command": "quoi-mais-cest-un-scandale", 
    "file": "./sounds/quoi-mais-cest-un-scandale.mp3"
  }, 
  {
    "command": "rangez_moi_ca_debile_la_table_ronde_c_est_pas_une_fete_de_l_artisanat", 
    "file": "./sounds/rangez_moi_ca_debile_la_table_ronde_c_est_pas_une_fete_de_l_artisanat.mp3"
  }, 
  {
    "command": "ratisser-bouse-torcher-cul-poules", 
    "file": "./sounds/ratisser-bouse-torcher-cul-poules.mp3"
  }, 
  {
    "command": "regardez_moi_ce_petit_navet", 
    "file": "./sounds/regardez_moi_ce_petit_navet.mp3"
  }, 
  {
    "command": "regardez_moi_cette_meule", 
    "file": "./sounds/regardez_moi_cette_meule.mp3"
  }, 
  {
    "command": "remarquez-jai-un-pote-poissonier", 
    "file": "./sounds/remarquez-jai-un-pote-poissonier.mp3"
  }, 
  {
    "command": "remonte-ton-slibard", 
    "file": "./sounds/remonte-ton-slibard.mp3"
  }, 
  {
    "command": "restez_pas_plante_la_comme_un_cepe", 
    "file": "./sounds/restez_pas_plante_la_comme_un_cepe.mp3"
  }, 
  {
    "command": "rien-ca-fait-rien-cassez-vous", 
    "file": "./sounds/rien-ca-fait-rien-cassez-vous.mp3"
  }, 
  {
    "command": "rien_a_carer", 
    "file": "./sounds/rien_a_carer.mp3"
  }, 
  {
    "command": "rien_a_carrer", 
    "file": "./sounds/rien_a_carrer.mp3"
  }, 
  {
    "command": "rooo_bon_alors_on_fait_venir_les_poulettes_ou_quoi", 
    "file": "./sounds/rooo_bon_alors_on_fait_venir_les_poulettes_ou_quoi.mp3"
  }, 
  {
    "command": "salut-sire-je-trouve-quil-fait-beau-mais-encore-frais-mais-beau", 
    "file": "./sounds/salut-sire-je-trouve-quil-fait-beau-mais-encore-frais-mais-beau.mp3"
  }, 
  {
    "command": "sans-deconner-faut-pas-y-aller-demain", 
    "file": "./sounds/sans-deconner-faut-pas-y-aller-demain.mp3"
  }, 
  {
    "command": "sans_blague_ya_pas_dla_gourdasse", 
    "file": "./sounds/sans_blague_ya_pas_dla_gourdasse.mp3"
  }, 
  {
    "command": "sans_deconner", 
    "file": "./sounds/sans_deconner.mp3"
  }, 
  {
    "command": "sans_etre_totalement_repoussant_il_n_y_a_pas_de_quoi_bousculer_une_charette", 
    "file": "./sounds/sans_etre_totalement_repoussant_il_n_y_a_pas_de_quoi_bousculer_une_charette.mp3"
  }, 
  {
    "command": "scorpion_entoure_par_le_feu", 
    "file": "./sounds/scorpion_entoure_par_le_feu.mp3"
  }, 
  {
    "command": "seigneur-bohort-je-commence-a-en-avoir-plein-le-dos", 
    "file": "./sounds/seigneur-bohort-je-commence-a-en-avoir-plein-le-dos.mp3"
  }, 
  {
    "command": "si-on-peut-sen-farcir-un-cest-toujours-ca-de-pris-quoi", 
    "file": "./sounds/si-on-peut-sen-farcir-un-cest-toujours-ca-de-pris-quoi.mp3"
  }, 
  {
    "command": "si_j_etais_tombe_sur_un_faisant", 
    "file": "./sounds/si_j_etais_tombe_sur_un_faisant.mp3"
  }, 
  {
    "command": "si_vous_etes_vendeur", 
    "file": "./sounds/si_vous_etes_vendeur.mp3"
  }, 
  {
    "command": "signe_de_vouloir_discuter", 
    "file": "./sounds/signe_de_vouloir_discuter.mp3"
  }, 
  {
    "command": "si-je-reflechissais", 
    "file": "./sounds/si-je-reflechissais.mp3"
  }, 
  {
    "command": "sils_sont_equidistants_on_peut_reperer_le_dragon", 
    "file": "./sounds/sils_sont_equidistants_on_peut_reperer_le_dragon.mp3"
  }, 
  {
    "command": "simple_deduction_mon_oncle", 
    "file": "./sounds/simple_deduction_mon_oncle.mp3"
  }, 
  {
    "command": "sinon_ce_que_je_peux_vous_proposer_on_attache_le_condamne", 
    "file": "./sounds/sinon_ce_que_je_peux_vous_proposer_on_attache_le_condamne.mp3"
  }, 
  {
    "command": "sire-je-ne-suis-pas-homme", 
    "file": "./sounds/sire-je-ne-suis-pas-homme.mp3"
  }, 
  {
    "command": "sire_vous_me_flattez", 
    "file": "./sounds/sire_vous_me_flattez.mp3"
  }, 
  {
    "command": "sortez-vous_les_doigts_du_cul", 
    "file": "./sounds/sortez-vous_les_doigts_du_cul.mp3"
  }, 
  {
    "command": "sounds.", 
    "file": "./sounds/sounds.json"
  }, 
  {
    "command": "soupcon_gros_nul", 
    "file": "./sounds/soupcon_gros_nul.mp3"
  }, 
  {
    "command": "sourire_comme_des_glands", 
    "file": "./sounds/sourire_comme_des_glands.mp3"
  }, 
  {
    "command": "stand_de_crepes", 
    "file": "./sounds/stand_de_crepes.mp3"
  }, 
  {
    "command": "sur_de_son_coup", 
    "file": "./sounds/sur_de_son_coup.mp3"
  }, 
  {
    "command": "tais_toi_ta_gueule_tais_toi", 
    "file": "./sounds/tais_toi_ta_gueule_tais_toi.mp3"
  }, 
  {
    "command": "tape-la-honte", 
    "file": "./sounds/tape-la-honte.mp3"
  }, 
  {
    "command": "tatan_elle_fait_des_flans", 
    "file": "./sounds/tatan_elle_fait_des_flans.mp3"
  }, 
  {
    "command": "tete-roupiller-couloir", 
    "file": "./sounds/tete-roupiller-couloir.mp3"
  }, 
  {
    "command": "toujours_se_plaindre_pequenauds", 
    "file": "./sounds/toujours_se_plaindre_pequenauds.mp3"
  }, 
  {
    "command": "tout_dans_le_furtif", 
    "file": "./sounds/tout_dans_le_furtif.mp3"
  }, 
  {
    "command": "tout_le_monde_s_en_branle_moi_le_premier", 
    "file": "./sounds/tout_le_monde_s_en_branle_moi_le_premier.mp3"
  }, 
  {
    "command": "tres_bien", 
    "file": "./sounds/tres_bien.mp3"
  }, 
  {
    "command": "tres_en_colere", 
    "file": "./sounds/tres_en_colere.mp3"
  }, 
  {
    "command": "tropgentil", 
    "file": "./sounds/tropgentil.mp3"
  }, 
  {
    "command": "tsoin-tsoin", 
    "file": "./sounds/tsoin-tsoin.mp3"
  }, 
  {
    "command": "tu-ne-tuera-point", 
    "file": "./sounds/tu-ne-tuera-point.mp3"
  }, 
  {
    "command": "tu_la_fermes_definitivement", 
    "file": "./sounds/tu_la_fermes_definitivement.mp3"
  }, 
  {
    "command": "un_bon_quart_dheure", 
    "file": "./sounds/un_bon_quart_dheure.mp3"
  }, 
  {
    "command": "un_genre_cake", 
    "file": "./sounds/un_genre_cake.mp3"
  }, 
  {
    "command": "un_jour_je_vais_lui_fumer_sa_gueule_a_ce_connard", 
    "file": "./sounds/un_jour_je_vais_lui_fumer_sa_gueule_a_ce_connard.mp3"
  }, 
  {
    "command": "un_plan_d_attaque_minute_au_poil_de_fion", 
    "file": "./sounds/un_plan_d_attaque_minute_au_poil_de_fion.mp3"
  }, 
  {
    "command": "une_claque_dans_le_museau_vous_repondez", 
    "file": "./sounds/une_claque_dans_le_museau_vous_repondez.mp3"
  }, 
  {
    "command": "une_fois_a_une_execution_je_m_approche_d_une_fille", 
    "file": "./sounds/une_fois_a_une_execution_je_m_approche_d_une_fille.mp3"
  }, 
  {
    "command": "urgan-lhomme-goujon", 
    "file": "./sounds/urgan-lhomme-goujon.mp3"
  }, 
  {
    "command": "venez-mouvriiir", 
    "file": "./sounds/venez-mouvriiir.mp3"
  }, 
  {
    "command": "venir_foutre_votre_merde", 
    "file": "./sounds/venir_foutre_votre_merde.mp3"
  }, 
  {
    "command": "voeux_de_pauvrete_jarrivais_pas_a_concilier", 
    "file": "./sounds/voeux_de_pauvrete_jarrivais_pas_a_concilier.mp3"
  }, 
  {
    "command": "voila_cest_pro", 
    "file": "./sounds/voila_cest_pro.mp3"
  }, 
  {
    "command": "voila_passez_moi_la_canne_a_peche", 
    "file": "./sounds/voila_passez_moi_la_canne_a_peche.mp3"
  }, 
  {
    "command": "votre_existence_est_merdique", 
    "file": "./sounds/votre_existence_est_merdique.mp3"
  }, 
  {
    "command": "vous-allez-me-montrer-ce-que-vous-avez-un-peu-dans-le-froc", 
    "file": "./sounds/vous-allez-me-montrer-ce-que-vous-avez-un-peu-dans-le-froc.mp3"
  }, 
  {
    "command": "vous-allez-me-promettre-de-pas-y-foutre-les-pieds", 
    "file": "./sounds/vous-allez-me-promettre-de-pas-y-foutre-les-pieds.mp3"
  }, 
  {
    "command": "vous-avez-pas-pris-le-temps-de-vous-habituer-au-fruit", 
    "file": "./sounds/vous-avez-pas-pris-le-temps-de-vous-habituer-au-fruit.mp3"
  }, 
  {
    "command": "vous-en-mettez-pas-trop", 
    "file": "./sounds/vous-en-mettez-pas-trop.mp3"
  }, 
  {
    "command": "vous-etes-une-gigantesque-tarlouze", 
    "file": "./sounds/vous-etes-une-gigantesque-tarlouze.mp3"
  }, 
  {
    "command": "vous-faites-pas-la-gueule-la", 
    "file": "./sounds/vous-faites-pas-la-gueule-la.mp3"
  }, 
  {
    "command": "vous-me-dites-il-faut-quelque-chose-de-festif", 
    "file": "./sounds/vous-me-dites-il-faut-quelque-chose-de-festif.mp3"
  }, 
  {
    "command": "vous-me-prenez-vraiment-pour-une-conne", 
    "file": "./sounds/vous-me-prenez-vraiment-pour-une-conne.mp3"
  }, 
  {
    "command": "vous-pouvez-aller-vous-gratter", 
    "file": "./sounds/vous-pouvez-aller-vous-gratter.mp3"
  }, 
  {
    "command": "vous-savez-cest-pas-parce-quun-vieux-moisi", 
    "file": "./sounds/vous-savez-cest-pas-parce-quun-vieux-moisi.mp3"
  }, 
  {
    "command": "vous-vous-devriez-arreter-de-sourire", 
    "file": "./sounds/vous-vous-devriez-arreter-de-sourire.mp3"
  }, 
  {
    "command": "vous_admettrez_que_vous_etes_hors_normes", 
    "file": "./sounds/vous_admettrez_que_vous_etes_hors_normes.mp3"
  }, 
  {
    "command": "vous_allez_fermer_vos_mouilles_oui", 
    "file": "./sounds/vous_allez_fermer_vos_mouilles_oui.mp3"
  }, 
  {
    "command": "vous_allez_me_foutre_le_camp_espece_de_con", 
    "file": "./sounds/vous_allez_me_foutre_le_camp_espece_de_con.mp3"
  }, 
  {
    "command": "vous_allez_me_lacher_les_noyaux_oui", 
    "file": "./sounds/vous_allez_me_lacher_les_noyaux_oui.mp3"
  }, 
  {
    "command": "vous_allez_pas_commencer_avec_vos_termes_pourris", 
    "file": "./sounds/vous_allez_pas_commencer_avec_vos_termes_pourris.mp3"
  }, 
  {
    "command": "vous_avez_pas_limpression_que_je_suis_dans_une_baignoire", 
    "file": "./sounds/vous_avez_pas_limpression_que_je_suis_dans_une_baignoire.mp3"
  }, 
  {
    "command": "vous_balader_avec_une_cuillere_a_soupe_ca_changerait_rien", 
    "file": "./sounds/vous_balader_avec_une_cuillere_a_soupe_ca_changerait_rien.mp3"
  }, 
  {
    "command": "vous_cassez_pas_la_nenette_pour_moi", 
    "file": "./sounds/vous_cassez_pas_la_nenette_pour_moi.mp3"
  }, 
  {
    "command": "vous_comprenez_le_principe", 
    "file": "./sounds/vous_comprenez_le_principe.mp3"
  }, 
  {
    "command": "vous_deconnez", 
    "file": "./sounds/vous_deconnez.mp3"
  }, 
  {
    "command": "vous_devriez_commencer_par_organiser_le_merdier_que_vous_avez_la_dedans", 
    "file": "./sounds/vous_devriez_commencer_par_organiser_le_merdier_que_vous_avez_la_dedans.mp3"
  }, 
  {
    "command": "vous_etes_completement_con", 
    "file": "./sounds/vous_etes_completement_con.mp3"
  }, 
  {
    "command": "vous_etes_des_damnes", 
    "file": "./sounds/vous_etes_des_damnes.mp3"
  }, 
  {
    "command": "vous_etes_un_gros_nul", 
    "file": "./sounds/vous_etes_un_gros_nul.mp3"
  }, 
  {
    "command": "vous_la_crachez_votre_pastille", 
    "file": "./sounds/vous_la_crachez_votre_pastille.mp3"
  }, 
  {
    "command": "vous_laissez_pas_embobiner_ils_cherchent_a_vous_rembobiner", 
    "file": "./sounds/vous_laissez_pas_embobiner_ils_cherchent_a_vous_rembobiner.mp3"
  }, 
  {
    "command": "vous_nous_utilisez_bon_gre_mal_gre_pour_arriver_sur_la_fin", 
    "file": "./sounds/vous_nous_utilisez_bon_gre_mal_gre_pour_arriver_sur_la_fin.mp3"
  }, 
  {
    "command": "vous_rigolez_jespere", 
    "file": "./sounds/vous_rigolez_jespere.mp3"
  }, 
  {
    "command": "vous_voulez_que_je_vous_degage_la_nuque_a_la_serpette", 
    "file": "./sounds/vous_voulez_que_je_vous_degage_la_nuque_a_la_serpette.mp3"
  }, 
  {
    "command": "vraiment_impressionnant", 
    "file": "./sounds/vraiment_impressionnant.mp3"
  }, 
  {
    "command": "wooouuuhouhouhou_c_est_mortel", 
    "file": "./sounds/wooouuuhouhouhou_c_est_mortel.mp3"
  }, 
  {
    "command": "ya_pas_de_mal", 
    "file": "./sounds/ya_pas_de_mal.mp3"
  }, 
  {
    "command": "ya_pas_un_pigeon_pour_envoyer_un_message", 
    "file": "./sounds/ya_pas_un_pigeon_pour_envoyer_un_message.mp3"
  }, 
  {
    "command": "zut_la", 
    "file": "./sounds/zut_la.mp3"
  }
]
