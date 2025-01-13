import { createServer, Model, Registry } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import { Server } from "miragejs/server";
import { priorityType, statusType } from "./types";

type Note = {
  id: string;
  value: string;
  status: statusType.Value;
  priority: priorityType.Value;
  createdAt: string;
};

const NoteModel: ModelDefinition<Note> = Model.extend({});

const startServer = (): Server<Registry<{ notes: typeof NoteModel }, {}>> => {
  return createServer<{ notes: typeof NoteModel }, {}>({
    models: {
      notes: NoteModel,
    },
    routes() {
      this.urlPrefix = "http://localhost:5173/api";

      this.get("/notes", (schema) => {
        return schema.all("notes").models;
      });

      // Return notes directly
      this.get("/notes/:id", (schema, req) => {
        const id = req.params.id;
        return schema.find("notes", id);
      });

      this.post("/notes", (schema, req) => {
        const attrs = JSON.parse(req.requestBody);
        return schema.create("notes", attrs).attrs;
      });

      // Return notes directly
      this.patch("/notes/:id", (schema, req) => {
        const newAttrs = JSON.parse(req.requestBody);
        const id = req.params.id;
        const old = schema.find("notes", id);
        return old?.update(newAttrs);
      });

      // Return notes directly
      this.delete("/notes/:id", (schema, req) => {
        const id = req.params.id;
        const note = schema.find("notes", id);
        note?.destroy();
        return { id };
      });
    },
  });
};

export default startServer;
