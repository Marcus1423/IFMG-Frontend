import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import { TaskContext } from "../contexts/TaskContext";


function TaskForm({ projectId = null }) {
  
  const { addTask } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    resolver: zodResolver(taskSchema),
    mode: "onChange"
  });


  function onSubmit(data) {
    addTask(data, projectId);
    setTitle("");
  }


  
  return (
     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">

      <h2>Nova Tarefa</h2>

      {/* Título */}
      <input
        type="text"
        placeholder="Título da tarefa"
        {...register("title")}
        className="sm:w-3xs md:w-2xl dark:bg-slate-800 border dark:text-slate-100 border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2 rounded-xl transition"
      />
      {errors.title && (
        <p style={{ color: "red" }}>
          {errors.title.message}
        </p>
      )}

      {/* Descrição */}
      <textarea
        placeholder="Descrição"
        {...register("description")}
        className="sm:w-3xs md:w-2xl dark:bg-slate-800 border dark:text-slate-100 border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2 rounded-xl transition"
      />

      {/* Categoria */}
      <select {...register("category")}>
        <option value="">Selecione</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudo">Estudo</option>
      </select>
      {errors.category && (
        <p style={{ color: "red" }}>
          {errors.category.message}
        </p>
      )}

      <button type="submit" disabled={!isValid} 
              className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all duration-200 text-white font-medium px-4 py-2 rounded-xl shadow-md"
      >
        Salvar
      </button>

    </form>
  );
}

export default TaskForm;