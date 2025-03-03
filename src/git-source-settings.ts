export interface IGitSourceSettings {
  /**
   * The location on disk where the repository will be placed
   */
  repositoryPath: string

  /**
   * The repository owner
   */
  repositoryOwner: string

  /**
   * The repository name
   */
  repositoryName: string

  /**
   * The ref to fetch
   */
  ref: string

  /**
   * The commit to checkout
   */
  commit: string

  /**
   * Indicates whether to clean the repository
   */
  clean: boolean

  /**
   * The depth when fetching
   */
  fetchDepth: number

  /**
   * The sparse checkout path
   */
  sparseCheckoutPath: string

  /**
   * Indicates whether to fetch LFS objects
   */
  lfs: boolean

  /**
   * Indicates whether to checkout submodules
   */
  submodules: boolean

  /**
   * Indicates whether to recursively checkout submodules
   */
  nestedSubmodules: boolean

  /**
   * The auth token to use when fetching the repository
   */
  authToken: string

  /**
   * The SSH key to configure
   */
  sshKey: string

  /**
   * Additional SSH known hosts
   */
  sshKnownHosts: string

  /**
   * Indicates whether the server must be a known host
   */
  sshStrict: boolean

  /**
   * Indicates whether to persist the credentials on disk to enable scripting authenticated git commands
   */
  persistCredentials: boolean
}
