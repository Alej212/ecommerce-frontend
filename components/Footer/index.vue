<template>
    <div class="footer">
        <div>
            <ul class="content-info">
                <li>
                    <NuxtLink>Información de la empresa</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Politicas</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Sorporte al cliente</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Información legal</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Subscripción al boletin</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Politica de Cookies</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="content-social content-social-active">
            <li class="content-social-title">
                Nuestras redes Sociales
            </li>
            <ul class="ul-social">
                <li>
                    <NuxtLink>
                        <Icon class="icon" name="mingcute:social-x-line" size="2rem"></Icon>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <Icon class="icon" name="ion:social-linkedin" size="2rem"></Icon>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <Icon class="icon" name="typcn:social-instagram" size="2rem"></Icon>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <Icon class="icon" name="ion:social-pinterest" size="2rem"></Icon>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="content-map">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9908.92120490781!2d-66.87287257209144!3d10.437763973672388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af639c2d8fe35%3A0x51455a53522e8d7d!2sParada%20de%20Autobus!5e0!3m2!1sen!2sve!4v1707063148448!5m2!1sen!2sve" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.footer {
    display: flex;
    height: max-content;
    padding: 1.25rem 2rem;
    background-color: #081413;
    justify-content: space-between;
}
.content-info {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    padding: 1rem 0;
}
.content-info li {
    font-size: 1rem;
}

li:hover {
    color: #50dbd0;
}
.content-social {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
    padding: 1rem 0;
}
.content-social-title {
    font-size: 1.5rem;
}
.ul-social {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
.content-map {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    height: 100%;
}
.map {
    border-radius: 5px;
    height: 300px;
    width: 400px;
}

@media screen and (max-width: 950px) {
    .content-social {
        display: none;
    }
    .content-social-active {
        display: flex;
        position: fixed;
        padding: .7rem;
        border-radius: 10px;
        left: -2.2rem;
        top: 10rem;
        background-color: rgb(0, 0, 0);
        z-index: 3;
        transition: left 0.5s;
    }
    .content-social-active:hover {
        left: 0;
    }
    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }
    .content-social-title {
        display: none;
    }
    .ul-social {
        flex-flow: column wrap;
    }
}

@media screen and (max-width: 750px) {
.footer {
    display: flex;
    flex-flow: column wrap;
    height: max-content;
    padding: 1.25rem 2rem;
    gap: 2rem;
    background-color: #081413;
    justify-content: none;
    align-items: center;
    text-align: center;
}
.content-map {
    display: none;
}
}
</style>