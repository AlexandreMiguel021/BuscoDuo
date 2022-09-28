import { Flex } from 'components/Flex'
import useSession from 'hooks/useSession'
import Image from 'next/image'
import { SignIn, SignOut, User } from 'phosphor-react'
import { Fragment, useEffect } from 'react'
import useUserStore from 'store/user-store'
import * as S from './Navbar.styles'

export function Navbar() {
	const getUser = useUserStore((state) => state.getUser)
	const user = useUserStore((state) => state.user)
	const signOut = useUserStore((state) => state.signOut)
	const signIn = useUserStore((state) => state.signIn)
	const { session } = useSession()

	useEffect(() => {
		getUser()
	}, [getUser])

	return (
		<Fragment>
			<S.Navbar>
				<Flex
					itemsCenter
					fullWidth
					justifyBetween={!!session}
					justifyCenter={!session}
				>
					{session && (
						<Flex itemsCenter gap='xs'>
							<S.Avatar>
								{user?.avatar ? (
									<Image src={user?.avatar} layout='fill' />
								) : (
									<S.AvatarNone>
										<User size={32} />
									</S.AvatarNone>
								)}
							</S.Avatar>
							<Flex col gap='2xs'>
								<S.DiscordName>{user?.discordName}</S.DiscordName>
								<S.Name>{user?.fullName}</S.Name>
							</Flex>
						</Flex>
					)}
					<Fragment>
						{session ? (
							<S.SignOutButton onClick={signOut}>
								<SignOut size={24} />
								Sair
							</S.SignOutButton>
						) : (
							<S.SignInButton onClick={signIn}>
								<SignIn size={24} />
								Entrar
							</S.SignInButton>
						)}
					</Fragment>
				</Flex>
			</S.Navbar>
			<S.NavSpacer />
		</Fragment>
	)
}
