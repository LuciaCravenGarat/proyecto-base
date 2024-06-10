import { useForm } from "react-hook-form";
import { Button, Form, FormControl, FormGroup, FormSelect } from "react-bootstrap";

const AddProduct = ({cargarData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const addItem = (obj) => {
    cargarData(obj);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(addItem)} method="POST">
      <FormGroup>
        <Form.Label>Nombre</Form.Label>
        <FormControl
          type="text"
          {...register("name", { required: "Este campo es obligatorio" })}
        />
        <Form.Text>{errors.name?.message}</Form.Text>
      </FormGroup>

      <FormGroup>
        <Form.Label>Descripción</Form.Label>
        <FormControl
          type="text"
          {...register("description", { required: "Este campo es obligatorio" })}
        />
        <Form.Text>{errors.description?.message}</Form.Text>
      </FormGroup>

      <FormGroup>
        <Form.Label>Precio</Form.Label>
        <FormControl
          type="text"
          {...register("price", { required: "Este campo es obligatorio" })}
        />
        <Form.Text>{errors.price?.message}</Form.Text>
      </FormGroup>

      <FormGroup>
        <Form.Label>URL</Form.Label>
        <FormControl
          type="text"
          {...register("src", { required: "Este campo es obligatorio" })}
        />
        <Form.Text>{errors.src?.message}</Form.Text>
      </FormGroup>

      <FormGroup>
        <Form.Label>Categoría</Form.Label>
        <FormSelect
          type="text"
          {...register("category", { required: "Este campo es obligatorio" })}
        >
          <option value="cafeteria">Cafetería</option>
          <option value="bebidas">bebidas</option>
          <option value="platos">platos</option>
          <option value="entradas">entradas</option>
        </FormSelect>
        <Form.Text>{errors.category?.message}</Form.Text>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Add product</Button>
      </FormGroup>
    </Form>
  );
};

export default AddProduct;
