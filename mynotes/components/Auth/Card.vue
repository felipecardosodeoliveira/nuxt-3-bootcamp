<script setup lang="ts">

const authState = ref<"login" | "signup">("login");
const router = useRouter();

interface User {
    email: string,
    password: string
}
const authError = ref("");
const showConfirmEmailMessage = ref(false);
const input = reactify<User>({
    email: "",
    password: ""
});

const { signUp, signOut, signIn, user } = useAuth();

const toggleAuthState = () => {
    if (authState.value === "login") {
        authState.value = "signup"
    } else {
        authState.value = "login"
    }
}

const handleSubmit = async () => {
    try {
        if (authState.value === "login") {
            await signIn({ email: input.email, password: input.password });
            router.push("/myprofile");
        } else {
            await signUp({ email: input.email, password: input.password });
            showConfirmEmailMessage.value = true;
        }
        input.email = "";
        input.password = "";
    } catch (err) {
        authError.value = err.message;
    }
};
</script>

<template>
    <NCard class="card">
        <div v-if="!showConfirmEmailMessage">
            <h3>{{ authState }}</h3>
            <div class="input-container">
                <input placeholder="Email" v-model="input.email" />
                <input placeholder="Password" v-model="input.password" type="password" />
            </div>
            <NButton @click="handleSubmit">Submit</NButton>
            <p class="error" v-if="authError">{{ authError }}</p>
            <p @click="toggleAuthState">
                {{
                    authState === "login"
                    ? "Don't have an account? Create one now"
                    : "Already have an account? Go ahead an log in"
                }}
            </p>
        </div>
        <div v-else>
            <h3>Check email for confirmation message</h3>
        </div>
    </NCard>
</template>

<style scoped>
.card {
    padding: 2rem;
}

.card h3 {
    font-size: 1.3em;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-top: 0.4rem;
}

.input-container input,
.input-container button {
    border: 1px solid #c3c3c3;
    margin-bottom: 0.4rem;
    padding: 0.6rem;
    width: 100%;
}

.input-container button {
    background-color: rgb(28, 132, 173);
    color: #fff;
}

p {
    color: gray;
    font-size: 0.85rem;
}

p a {
    color: rgb(28, 132, 173);
}

.error {
    color: red;
}
</style>