<template>
    <div class="container">
        <div class="cover">
            <div class="col-md-12">
                <h3>Detalle de Producto</h3>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8 img-section">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x100/000">
                    </div>
                    <div class="col-md-12">
                        <h4>Titulo Producto {{ id }}</h4>    <!-- recibe el parámetro del router escrito en index.js -->
                        <p>Descripción del Producto</p>
                        <a href="#" class="btn btn-success btn-sm">Agregar al carro</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>
    .cover{
        padding: 20px;
        margin: 40px 2px;
        border: 1px solid #d2e0e6;
    }
    .img-section img{
        width: 100%;
    }
</style>