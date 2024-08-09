<script lang="ts">
</script>

<div class="  h-screen flex flex-col">
	<main class="flex-1 overflow-y-scroll px-4 py-6">
		<div class="bg-white shadow-lg rounded-lg p-6 mb-6">
			<h2 class="text-gray-800 font-bold text-lg mb-4">Featured Content</h2>
			<p class="text-gray-600 text-sm">
				Discover the latest updates and exciting features in our app.
			</p>
		</div>

		<div class="bg-white shadow-lg rounded-lg p-6 mb-6">
			<h2 class="text-gray-800 font-bold text-lg mb-4">Recent Activity</h2>
			<ul class="space-y-4">
				<li class="flex items-center">
					<div class="bg-blue-500 text-white rounded-full p-2 mr-4">
						<svg
							class="h-6 w-6 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3-8a3 3 0 1 1-3-3 3 3 0 0 1 3 3z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-gray-800 font-bold">New User Joined</h3>
						<p class="text-gray-600 text-sm">3 hours ago</p>
					</div>
				</li>
				<!-- Add more activity items as needed -->
			</ul>
		</div>
	</main>

	<footer
		class="bg-white shadow-lg px-4 py-3 flex justify-between items-center"
	>
		<nav class="flex space-x-4">
			<a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">Profile</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">Settings</a>
		</nav>
		<div class="text-gray-600 text-sm">© 2023 My App</div>
	</footer>
</div>
