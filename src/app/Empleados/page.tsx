'use client'
import Table from "@/component/Table/page";
import { IRoot } from "@/models/response";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const data = [
  { nombre: 'Juan Pérez', correo: 'juan@example.com', telefono: '123-456-7890' },
  { nombre: 'María García', correo: 'maria@example.com', telefono: '987-654-3210' },
  { nombre: 'Carlos López', correo: 'carlos@example.com', telefono: '456-789-1234' },
];


export default function Empleados() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://randomuser.me/api/?results=5',
      headers: {}
    };

    axios.request(config)
      .then((response: AxiosResponse) => {
        let data: IRoot = response.data
        let newData:any = []
        data.results.forEach(f => {
          newData.push(
            { nombre: 'Carlos López', correo: f.email, telefono: '456-789-1234' }
          )
        })
        setUsers(newData)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <>
      <Table
        columns={[
          'Nombre',
          'Correo',
          'Teléfono'
        ]}
        data={users}
      />
    </>
  );
}
