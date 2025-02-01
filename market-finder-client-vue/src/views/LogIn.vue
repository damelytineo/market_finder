<template>
    <div class="login">
        <form @submit.prevent="onSubmit">
            <div v-if="error" class="border px-4 py-3 rounded relative" role="alert">
                {{ error }}
            </div>
            <div>
                <label for="username">Username:</label>
                <input type="text" v-model="username" id="username" />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" />
            </div>
            <button type="submit">Log In</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "LogIn",

    data() {
        return {
            username: "",
            password: "",
            error: "",
        };
    },

    methods: {
        onSubmit() {
            if (!this.username || !this.password) {
                this.error = "Both username and password are required.";
                return;
            }

            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username: this.username, password: this.password }),
            };

            fetch("http://localhost:3000/login", configObj)
                .then((response) => {
                    if (!response.ok) {
                        return response.json().then((data) => {
                            throw new Error(data.message);
                        });
                    }
                    return response.json();
                })
                .then((userData) => {
                    this.$emit("login", userData.user.id);
                })
                .catch((error) => {
                    console.error("An error occurred:", error);
                    this.error = error.message;
                });
        },
    },
};
</script>

<style scoped></style>