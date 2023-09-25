"use client";
import Image from "next/image";
import React from "react";
import Layout from "./components/Layout";
import Title from "./components/Title";
import InputText from "./components/InputText";
import Button from "./components/Button";
import Card from "./components/Card";
import { useNotes } from "./contexts/NoteContext";
import Navbar from "./components/Navbar";
import { format } from "date-fns";

export default function Home() {
  const { notes, addNote } = useNotes();

  const handleAddNote = (event) => {
    event.preventDefault();

    const form = event.target;

    const newNote = {
      // createdAt: new Date().toISOString(),
      createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),

      title: form.title.value,
      subtitle: form.subtitle.value,
      content: form.content.value,
    };

    addNote(newNote);
    console.log(newNote);
    form.reset();
  };

  return (
    <Layout>
      <Navbar></Navbar>
      <Title>Fundamentos de React</Title>

      <form className="max-w-md mx-auto space-y-4" onSubmit={handleAddNote}>
        <div className="block">
          <InputText placeholder="Title" ToName="title"></InputText>
        </div>
        <div className="block">
          <InputText placeholder="Subtitle" ToName="subtitle"></InputText>
        </div>
        <div className="block">
          <InputText placeholder="Content" ToName="content"></InputText>
        </div>
        <div className="block">
          <Button>Enviar</Button>
        </div>
      </form>

      <div className="max-w-md mx-auto mt-8">
        {notes.map((note) => (
          <Card key={note.createdAt} {...note} />
        ))}
      </div>
    </Layout>
  );
}
