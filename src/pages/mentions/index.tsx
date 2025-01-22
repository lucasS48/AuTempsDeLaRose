// pages/mentions-legales-confidentialite.js
import React from "react";

const Mentions = () => {
  // === Variables à personnaliser ===
  // Informations éditeur
  const siteName = "Au temps de la Rose";
  const siteUrl = "https://www.autempsdelarose.fr"; // Remplacez par l'URL réelle
  const siteOwnerName = "SIMON Chloé";
  const siteOwnerAddress = "13 Rue Pasteur 11, 14310 Villers-Bocage";
  const siteOwnerEmail = "autempsdelarose@outlook.com";
  const siteOwnerPhone = "+33 02 31 77 01 31";
  const siteOwnerStatus = "SAS"; // ou SARL, SAS, Association, etc.
  const siteOwnerSiret = "938 230 349 00012";
  const siteOwnerVAT = "FR58938230349";

  // Informations hébergeur
  const siteHost = "Vercel Inc.";
  const siteHostAddress = "340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis";
  const siteHostSite = "https://vercel.com/";
  const siteHostMail = "support@vercel.com";

  // Date de dernière mise à jour
  const lastUpdate = "23/01/2025";

  return (
    <div className="bg-gray-50 shadow-lg">
      

      {/* CONTENU DE LA PAGE (mentions légales) */}
      <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Mentions légales &amp; Politique de confidentialité
        </h1>

        {/* MENTIONS LEGALES */}
        <article className="prose prose-sm sm:prose-base md:prose-lg lg:prose-lg prose-gray">
          <h2>Mentions légales</h2>
          <hr className="my-4 border-gray-200" />

          <h3 className="mt-8 font-semibold text-gray-900">1. Éditeur du site</h3>
          <p className="text-gray-700">
            <strong>Nom du site :</strong> {siteName}
            <br />
            <strong>Responsable de la publication :</strong> {siteOwnerName}
            <br />
            <strong>Adresse :</strong> {siteOwnerAddress}
            <br />
            <strong>E-mail :</strong> {siteOwnerEmail}
            <br />
            <strong>Téléphone :</strong> {siteOwnerPhone}
            <br />
            <strong>Statut :</strong> {siteOwnerStatus}
            <br />
            <strong>N° SIRET :</strong> {siteOwnerSiret}
            <br />
            <strong>TVA intracommunautaire :</strong> {siteOwnerVAT}
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">2. Hébergeur du site</h3>
          <p className="text-gray-700">
            <strong>Hébergeur :</strong> {siteHost}
            <br />
            <strong>Adresse :</strong> {siteHostAddress}
            <br />
            <strong>Site Web :</strong> {siteHostSite}
            <br />
            <strong>Téléphone :</strong> {siteHostMail}
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">
            3. Conditions générales d’utilisation du site
          </h3>
          <p className="text-gray-700">
            L’utilisation du site <em>{siteUrl}</em> implique l’acceptation pleine et entière
            des conditions générales d’utilisation décrites ci-après. Ces conditions
            sont susceptibles d’être modifiées ou complétées à tout moment ; les utilisateurs
            du site sont donc invités à les consulter de manière régulière.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">4. Services fournis</h3>
          <p className="text-gray-700">
            Le site <em>{siteName}</em> a pour objet de fournir une information concernant
            l’ensemble des activités de la société (ou de l’éditeur). L’éditeur du site
            s’efforce de fournir sur le site des informations aussi précises que possible.
            Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes
            et des carences dans la mise à jour. Toutes les informations indiquées sur le
            site sont données à titre indicatif et sont susceptibles d’évoluer.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">
            5. Propriété intellectuelle et contrefaçons
          </h3>
          <p className="text-gray-700">
            L’éditeur du site est propriétaire des droits de propriété intellectuelle ou
            détient les droits d’usage sur tous les éléments accessibles sur le site,
            notamment : les textes, images, graphismes, logo, icônes, sons, logiciels…
            Toute reproduction, représentation, modification, publication, adaptation de
            tout ou partie des éléments du site, quel que soit le moyen ou le procédé
            utilisé, est interdite, sauf autorisation écrite préalable de l’éditeur.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">6. Limitation de responsabilité</h3>
          <p className="text-gray-700">
            L’éditeur ne pourra être tenu responsable des dommages directs et indirects
            causés au matériel de l’utilisateur, lors de l’accès au site <em>{siteName}</em>.
            L’éditeur ne pourra également être tenu responsable des dommages indirects
            (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs
            à l’utilisation du site.
          </p>
        </article>

        {/* POLITIQUE DE CONFIDENTIALITE */}
        <article className="prose prose-sm sm:prose-base md:prose-lg lg:prose-lg prose-gray mt-10">
          <h2>Politique de confidentialité</h2>
          <hr className="my-4 border-gray-200" />

          <h3 className="mt-8 font-semibold text-gray-900">1. Collecte des données personnelles</h3>
          <p className="text-gray-700">
            Les données personnelles susceptibles d’être collectées sur le site{" "}
            <em>{siteUrl}</em> sont principalement utilisées pour la gestion des relations
            avec vous et, le cas échéant, pour le traitement de vos commandes (si e-commerce).
            Ces données sont collectées via, par exemple, le formulaire de contact
            (nom, adresse e-mail, etc.) ou via l’utilisation de cookies.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">2. Finalité du traitement des données</h3>
          <p className="text-gray-700">
            L’éditeur est susceptible de traiter vos informations personnelles pour :
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Vous fournir les informations ou les services que vous avez demandés ;</li>
            <li>Recueillir des informations nous permettant d’améliorer notre site, nos produits et services ;</li>
            <li>
              Pouvoir vous contacter à propos de différents événements relatifs à{" "}
              <em>{siteName}</em>, incluant notamment la mise à jour des produits et le support client.
            </li>
          </ul>

          <h3 className="mt-8 font-semibold text-gray-900">3. Durée de conservation de vos données</h3>
          <p className="text-gray-700">
            Les données personnelles sont conservées uniquement le temps nécessaire
            pour la finalité poursuivie (ex. : durée de traitement de votre demande,
            durée légale, etc.). Les cookies expirent automatiquement à la fin de
            leur durée de validité (13 mois maximum selon les recommandations de la CNIL).
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">4. Droits informatiques et libertés</h3>
          <p className="text-gray-700">
            Conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Droit d’accès et de rectification</li>
            <li>Droit à l’effacement (« droit à l’oubli »)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="text-gray-700">
            Pour exercer ces droits, vous pouvez envoyer un e-mail à l’éditeur à
            l’adresse suivante : <strong>{siteOwnerEmail}</strong>, en justifiant de votre identité.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">5. Cookies</h3>
          <p className="text-gray-700">
            Le site peut être amené à vous demander l’acceptation des cookies pour
            des besoins de statistiques et d’affichage. Vous avez la possibilité de
            refuser les cookies depuis les paramètres de votre navigateur ou via
            le bandeau cookies présent lors de votre première visite. Le refus
            d’installation d’un cookie peut entraîner l’impossibilité d’accéder
            à certains services.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">6. Sécurité</h3>
          <p className="text-gray-700">
            Nous mettons en œuvre diverses mesures de sécurité pour préserver vos
            informations personnelles. Les serveurs et réseaux informatiques sont
            sécurisés afin d’empêcher tout accès non autorisé.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">
            7. Liens hypertextes et contenus embarqués
          </h3>
          <p className="text-gray-700">
            Le site peut contenir des liens hypertextes vers d’autres sites. L’éditeur
            n’a pas la possibilité de vérifier le contenu des sites ainsi visités
            et n’assumera en conséquence aucune responsabilité de ce fait. De même,
            l’hébergement de contenus externes (vidéos, images, etc.) sur le site
            peut impliquer une collecte de données par ces plateformes tierces,
            soumises à leurs propres politiques de confidentialité.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">
            8. Droit applicable et attribution de juridiction
          </h3>
          <p className="text-gray-700">
            Tout litige en relation avec l’utilisation du site <em>{siteName}</em>{" "}
            est soumis au droit français (ou le droit applicable dans votre pays).
            Il est fait attribution exclusive de juridiction aux tribunaux
            compétents du ressort du siège social de l’éditeur.
          </p>

          <h3 className="mt-8 font-semibold text-gray-900">9. Contact</h3>
          <p className="text-gray-700">
            Pour toute question, information sur les produits présentés sur le site
            ou concernant le site lui-même, vous pouvez laisser un message à
            l’adresse suivante : <strong>{siteOwnerEmail}</strong>.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            <em>Dernière mise à jour : {lastUpdate}</em>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Mentions;
