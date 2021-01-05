import React from "react";

function Filtre() {
  return (
    <div class="col-12 col-lg-3 px-0 lg-shadow-sm-1 position-relative z-10">
      <div class="d-block d-lg-none pr-12px border border-dark-primary">
        <select name="tabs" id="tab-select" class="fs-short-3 ff-semibold">
          <option value="0" selected>
            Vêtements
          </option>
          <option value="1">Médical</option>
          <option value="2">Déchets</option>
          <option value="3">Bars</option>
          <option value="4">Parking centre-ville</option>
          <option value="5">Restauration</option>
          <option value="6">Gestion de l'eau</option>
          <option value="7">Commune</option>
          <option value="8">Culture</option>
          <option value="9">Bibliothèque</option>
        </select>
      </div>

      <ul class="d-none d-lg-block border-bottom border-default">
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-shirt w-22px h-22px mr-16px bg-size-auto"></i>
            Vêtements
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-medical w-22px h-22px mr-16px bg-size-auto"></i>
            Médical
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-trash w-22px h-22px mr-16px bg-size-auto"></i>
            Déchets
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-martini-glass w-22px h-22px mr-16px bg-size-auto"></i>
            Bars
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-cart w-22px h-22px mr-16px bg-size-auto"></i>Parking
            centre-ville
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-flatware w-22px h-22px mr-16px bg-size-auto"></i>
            Restauration
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-water-drop w-22px h-22px mr-16px bg-size-auto"></i>
            Gestion de l'eau
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-umbrella w-22px h-22px mr-16px bg-size-auto"></i>
            Commune
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-disk w-22px h-22px mr-16px bg-size-auto"></i>Culture
          </a>
        </li>
        <li class="border-top border-default">
          <a
            href="#"
            class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
          >
            <i class="i-book w-22px h-22px mr-16px bg-size-auto"></i>
            Bibliothèque
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filtre;
