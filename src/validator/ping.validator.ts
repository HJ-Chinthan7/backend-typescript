import z from "zod/v3";
const pingSchema=z.object({
   name:z.string().min(1)
});

export default pingSchema;