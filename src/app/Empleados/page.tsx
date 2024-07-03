'use client'
import Table from "@/component/Table/page";
import { IRoot } from "@/models/response";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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
        let newData: any = []
        data.results.forEach(f => {
          newData.push(
            { nombre: `${f.name.title} ${f.name.first} ${f.name.last}`, correo: f.email, telefono: f.phone }
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
  )
}