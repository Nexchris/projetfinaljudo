import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-size: cover; 
  background-color:#0A094B;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const Datatitle = styled.div`
  font-family: Aileron;
  font-size: 6vh;
  margin-left: 68vh;
  margin-bottom: 3%;
  color: white;
  font-weight: bold;

`;

const Overlaymargin = styled.div`
  margin-top: 8%;
  animation: backInUp 1s;
`;

const Datatext = styled.div`
  color: white;
  height: auto;
  width: 80vh;
  font-family: Aileron;
  font-size: 2.5vh;
  height:60vh;
  

  
  margin-left: 65vh;
  scrollbar-color: white transparent; /* Pour Firefox */
  scrollbar-border-radius: 5px;
  overflow-y: auto;
`;

function Overlay() {
  return (
    <Container>
      <Overlaymargin>
        <Datatitle>Politique de Confidentialité</Datatitle>
        <Datatext>
        Cette Politique de Confidentialité régit la manière dont Nexus collecte, utilise, maintient et divulgue les informations collectées auprès des utilisateurs (chacun, un "Utilisateur") du site web http://www.leslegendesdujudofrancais. Cette politique de confidentialité s'applique au site web et à tous les produits et services proposés par Nexus. <br /> <br />

Informations personnelles
<hr />

Nous pouvons collecter des informations personnelles auprès des Utilisateurs de diverses manières, notamment, mais sans s'y limiter, lorsque les Utilisateurs visitent notre site, s'inscrivent sur le site, passent une commande, remplissent un formulaire, et en relation avec d'autres activités, services, fonctionnalités ou ressources que nous mettons à leur disposition sur notre site. Les Utilisateurs peuvent être invités, le cas échéant, à indiquer leur nom, leur adresse e-mail, leur adresse postale, leur numéro de téléphone, et d'autres informations. <br /> <br />

Utilisation des informations collectées
<hr />

Nexus peut collecter et utiliser les informations personnelles des Utilisateurs pour les raisons suivantes : <br /> <br />

<li>Pour améliorer le service client : les informations que vous fournissez nous aident à répondre à vos demandes de service client et à vos besoins de manière plus efficace.</li> <br />
<li>Pour personnaliser l'expérience utilisateur : nous pouvons utiliser les informations dans leur ensemble pour comprendre comment nos Utilisateurs utilisent les services et les ressources fournis sur notre site.</li> <br />
<li>Pour traiter les paiements : nous pouvons utiliser les informations que les Utilisateurs fournissent concernant eux-mêmes lorsqu'ils passent une commande uniquement pour fournir un service à cette commande. Nous ne partageons pas ces informations avec des tiers, sauf dans la mesure nécessaire pour fournir le service.</li> <br />

<li>Pour envoyer des e-mails périodiques : nous pouvons utiliser l'adresse e-mail pour envoyer aux Utilisateurs des informations et mises à jour relatives à leur commande. Elle peut également être utilisée pour répondre à leurs demandes, questions et/ou autres demandes. Si l'Utilisateur décide de s'inscrire à notre liste de diffusion, il recevra des e-mails qui peuvent inclure des nouvelles de l'entreprise, des mises à jour, des informations sur des produits ou des services liés, etc. Si à n'importe quel moment l'Utilisateur souhaite se désinscrire de recevoir des e-mails futurs, nous incluons des instructions de désinscription détaillées au bas de chaque e-mail.</li> <br />

Protection des informations
<hr />

Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données et des mesures de sécurité pour protéger contre l'accès non autorisé, la modification, la divulgation ou la destruction de vos informations personnelles, de votre nom d'utilisateur, de votre mot de passe, de vos informations de transaction et de toute autre information stockée sur notre site.  <br /> <br />

Partage de vos informations personnelles <hr />

Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations démographiques agrégées génériques non liées à des informations personnelles identifiables concernant nos visiteurs et utilisateurs avec nos partenaires commerciaux, affiliés de confiance et annonceurs à des fins décrites ci-dessus.  <br /> <br />

Modifications de cette politique de confidentialité <hr />

Nexus se réserve le droit de mettre à jour cette politique de confidentialité à tout moment. Lorsque nous le ferons, nous réviserons la date de mise à jour au bas de cette page. Nous encourageons les Utilisateurs à consulter fréquemment cette page pour tout changement afin de rester informés sur la manière dont nous aidons à protéger les informations personnelles que nous collectons. Vous reconnaissez et acceptez qu'il est de votre responsabilité de revoir périodiquement cette politique de confidentialité et de prendre connaissance des modifications. <br /> <br />

Votre acceptation de ces termes <hr />

En utilisant ce site, vous signifiez votre acceptation de cette politique. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre site. Votre utilisation continue du site après la publication de modifications de cette politique sera considérée comme votre acceptation de ces modifications. <br /> <br />

Contactez-nous <hr />

Si vous avez des questions concernant cette Politique de Confidentialité, les pratiques de ce site, ou vos interactions avec ce site, veuillez nous contacter à :

Nexus
10 avenue de nexus, 75001 Paris
nexusagency@hotmail.fr
+33 6 85 96 35 29

Cette politique a été mise à jour le 26/04/2024.


        </Datatext>
      </Overlaymargin>
    </Container>
  );
}

export default Overlay;
