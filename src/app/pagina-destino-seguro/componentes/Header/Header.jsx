"use client";
import Image from "next/image";
import logo from "@/app/pagina-destino-seguro/image/logo.svg";
import styles from "../Nav.module.css";
import Nav from "../Nav";
import { Menu } from "react-feather";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import VisuallyHidden from "../VisuallyHidden";
import useToggle from "../../use-toggle";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useToggle(false);
  const [esMovil, setEsMovil] = useState(true);

  return <>></>;
}
